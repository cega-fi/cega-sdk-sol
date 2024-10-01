import * as anchor from '@project-serum/anchor';
import {
  Connection,
  PublicKey,
  TransactionSignature,
  Transaction,
  Signer,
  AccountInfo,
  sendAndConfirmRawTransaction,
  SystemProgram,
  ConfirmOptions,
  Keypair,
  ComputeBudgetProgram,
  RpcResponseAndContext,
  SignatureResult,
} from '@solana/web3.js';
import {
  TOKEN_PROGRAM_ID,
  AccountLayout as TokenAccountLayout,
  createInitializeAccountInstruction,
  getMinimumBalanceForRentExemptAccount,
} from '@solana/spl-token';
import BufferLayout from 'buffer-layout';
import { Program } from './program';
import { TransactionError, vaultIdlErrors } from './errors';
import { SOL_PUBKEY, UNDERLYINGS_TO_PUBKEY_MAP } from './constants';
import { TokenAccount } from './types';
import { Network } from './network';

const TX_RETRY_INTERVAL = 2000;

export async function sleep(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms, undefined));
}

export function defaultCommitment(): ConfirmOptions {
  return {
    skipPreflight: true,
    preflightCommitment: 'processed',
    commitment: 'processed',
  };
}

const uint64 = (property = 'uint64') => BufferLayout.blob(8, property);

const int64 = (property = 'int64') => BufferLayout.blob(8, property);

// https://github.com/nodejs/node/blob/v14.17.0/lib/internal/errors.js#L758
export const ERR_BUFFER_OUT_OF_BOUNDS = () =>
  new Error('Attempt to access memory outside buffer bounds');

// https://github.com/nodejs/node/blob/v14.17.0/lib/internal/errors.js#L968
export const ERR_INVALID_ARG_TYPE = (name: string, expected: string, actual: string) =>
  new Error(`The "${name}" argument must be of type ${expected}. Received ${actual}`);

// https://github.com/nodejs/node/blob/v14.17.0/lib/internal/errors.js#L1262
export const ERR_OUT_OF_RANGE = (str: string, range: string, received: number) =>
  new Error(`The value of "${str} is out of range. It must be ${range}. Received ${received}`);

// https://github.com/nodejs/node/blob/v14.17.0/lib/internal/validators.js#L127-L130
export function validateNumber(value: number, name: string) {
  if (typeof value !== 'number') throw ERR_INVALID_ARG_TYPE(name, 'number', value);
}

// https://github.com/nodejs/node/blob/v14.17.0/lib/internal/buffer.js#L68-L80
export function boundsError(value: number, length: number) {
  if (Math.floor(value) !== value) {
    validateNumber(value, 'offset');
    throw ERR_OUT_OF_RANGE('offset', 'an integer', value);
  }

  if (length < 0) throw ERR_BUFFER_OUT_OF_BOUNDS();

  throw ERR_OUT_OF_RANGE('offset', `>= 0 and <= ${length}`, value);
}

export function readBigInt64LE(buffer: Uint8Array, offset = 0) {
  validateNumber(offset, 'offset');
  const first = buffer[offset];
  const last = buffer[offset + 7];
  if (first === undefined || last === undefined) boundsError(offset, buffer.length - 8);
  const val =
    buffer[offset + 4] + buffer[offset + 5] * 2 ** 8 + buffer[offset + 6] * 2 ** 16 + (last << 24); // Overflow
  return (
    (BigInt(val) << BigInt(32)) +
    BigInt(
      first + buffer[++offset] * 2 ** 8 + buffer[++offset] * 2 ** 16 + buffer[++offset] * 2 ** 24,
    )
  );
}

const SystemClockLayout = BufferLayout.struct([
  uint64('slot'),
  int64('epochStartTimestamp'),
  uint64('epoch'),
  uint64('leaderScheduleEpoch'),
  int64('unixTimestamp'),
]);

export function getClockTimestamp(accountInfo: AccountInfo<Buffer>): number {
  const info = SystemClockLayout.decode(accountInfo.data);
  return Number(readBigInt64LE(info.unixTimestamp, 0));
}

export async function processTransaction(
  program: Program,
  provider: anchor.AnchorProvider,
  tx: Transaction,
  signers?: Array<Signer>,
  opts?: ConfirmOptions,
  maxSendAttempts: number = 180,
  numRetries: number = 3,
): Promise<TransactionSignature> {
  const errors = [];
  for (let i = 0; i < numRetries; i += 1) {
    try {
      return processTransactionSingle(program, provider, tx, signers, opts, maxSendAttempts);
    } catch (error) {
      console.error(error);
      errors.push(error);
    }
  }
  throw new Error(`unable to process transasction: ${errors}`);
}

async function processTransactionSingle(
  program: Program,
  provider: anchor.AnchorProvider,
  tx: Transaction,
  signers?: Array<Signer>,
  opts?: ConfirmOptions,
  maxSendAttempts: number = 180,
): Promise<TransactionSignature> {
  const blockhashResult = await provider.connection.getLatestBlockhash();

  let newTx = tx;
  newTx.recentBlockhash = blockhashResult.blockhash;
  newTx.feePayer = provider.wallet.publicKey;
  // TODO: add priority fee to every transaction automatically
  // newTx.instructions = [
  //   ...tx.instructions,
  //   ComputeBudgetProgram.setComputeUnitPrice({
  //     microLamports: 1_000_000 * 1,
  //   }),
  // ];
  newTx = await provider.wallet.signTransaction(tx);

  const newSigners = (signers || [])
    .filter((signer) => signer !== undefined)
    .forEach((signer) => newTx.partialSign(signer));

  const signatureRaw = newTx.signatures[0];
  const txSignature = signatureRaw.signature
    ? anchor.utils.bytes.bs58.encode(signatureRaw.signature)
    : null;

  if (!txSignature) {
    throw new TransactionError(
      'Transaction signature not found',
      'TRANSACTION_SIGNATURE_NOT_FOUND',
      999999,
      'N/A',
    );
  }

  let confirmTxPromise = null;
  let confirmedTx: RpcResponseAndContext<SignatureResult> | null = null;
  let txSendAttempts: number = 0;

  try {
    // confirmTransaction throws error, handle it
    confirmTxPromise = provider.connection.confirmTransaction(
      {
        signature: txSignature,
        blockhash: blockhashResult.blockhash,
        lastValidBlockHeight: blockhashResult.lastValidBlockHeight,
      },
      'confirmed',
    );

    while (!confirmedTx) {
      await provider.connection.sendRawTransaction(newTx.serialize(), {
        // Skipping preflight i.e. tx simulation by RPC as we simulated the tx above
        // This allows Triton RPCs to send the transaction through multiple pathways for the
        // fastest delivery
        skipPreflight: true,
        // Setting max retries to 0 as we are handling retries manually
        // Set this manually so that the default is skipped
        maxRetries: 0,
      });

      confirmedTx = await Promise.race([
        confirmTxPromise,
        new Promise((resolve) =>
          setTimeout(() => {
            resolve(null);
          }, TX_RETRY_INTERVAL),
        ),
      ]);
      if (confirmedTx) {
        break;
      }

      txSendAttempts += 1;
      if (txSendAttempts > maxSendAttempts) {
        throw new Error(`Exceeded max send attempts: ${maxSendAttempts}`);
      }
      console.log(
        `${new Date().toISOString()} Tx not confirmed after ${
          TX_RETRY_INTERVAL * txSendAttempts
        }ms, resending`,
      );
    }
  } catch (err) {
    console.log(err);
    // // Check for Timeouts
    // if (`${err}`.includes('Transaction was not confirmed')) {
    //   const txSig = `${err}`.split('signature')[1].split(' ')[1].trim();

    //   // TODO: use error numbers, 999999 is a stand-in variable currently
    //   let errorCode = 999999;
    //   let errorName = 'TRANSACTION_NOT_CONFIRMED';
    //   if (`${err}`.includes('TransactionExpiredTimeoutError')) {
    //     errorName = 'TransactionExpiredTimeoutError';
    //     errorCode = 100000;
    //   }
    //   throw new TransactionError(err, errorName, errorCode, txSig);
    // }

    const translatedErr = anchor.ProgramError.parse(err, vaultIdlErrors);
    if (translatedErr !== null) {
      throw translatedErr;
    }
    throw err;
  }

  if (!confirmedTx) {
    console.log(`${new Date().toISOString()} Tx Unconfirmed: ${txSignature}`);
    throw new TransactionError('Transaction failed', 'TRANSACTION_FAILED', 999999, txSignature);
  }

  if (confirmedTx.value.err) {
    console.log(
      `${new Date().toISOString()} Tx Failure: https://explorer.solana.com/tx/${txSignature}`,
    );
    throw new TransactionError('Transaction failed', 'TRANSACTION_FAILED', 999999, txSignature);
  }

  return txSignature;
}

export async function createWrappedNativeAccount(
  connection: Connection,
  owner: PublicKey,
  payer: PublicKey,
  amount: number,
): Promise<[Transaction, Keypair]> {
  // Allocate memory for the account
  const balanceNeeded = await getMinimumBalanceForRentExemptAccount(connection);

  // Create a new account
  const newAccount = Keypair.generate();
  const transaction = new Transaction();
  transaction.add(
    SystemProgram.createAccount({
      fromPubkey: payer,
      newAccountPubkey: newAccount.publicKey,
      lamports: balanceNeeded,
      space: TokenAccountLayout.span,
      programId: TOKEN_PROGRAM_ID,
    }),
  );

  // Send lamports to it (these will be wrapped into native tokens by the token program)
  transaction.add(
    SystemProgram.transfer({
      fromPubkey: payer,
      toPubkey: newAccount.publicKey,
      lamports: amount,
    }),
  );

  // Assign the new account to the native token mint.
  // the account will be initialized with a balance equal to the native token balance.
  // (i.e. amount)
  transaction.add(createInitializeAccountInstruction(newAccount.publicKey, SOL_PUBKEY, owner));

  // Send the three instructions
  return [transaction, newAccount];
}

// https://spl.solana.com/token#finding-all-token-accounts-for-a-specific-mint
export async function getTokenAccountsForMint(
  connection: Connection,
  mint: PublicKey,
): Promise<TokenAccount[]> {
  const accounts = await connection.getParsedProgramAccounts(TOKEN_PROGRAM_ID, {
    filters: [
      {
        dataSize: 165, // number of bytes
      },
      {
        memcmp: {
          offset: 0, // number of bytes
          bytes: mint.toBase58(), // base58 encoded string
        },
      },
    ],
  });

  return accounts.map((acc: any) => ({
    mint: new PublicKey(acc.account.data.parsed.info.mint),
    owner: new PublicKey(acc.account.data.parsed.info.owner),
    uiAmount: acc.account.data.parsed.info.tokenAmount.uiAmount,
    amount: new anchor.BN(acc.account.data.parsed.info.tokenAmount.amount),
    decimals: acc.account.data.parsed.info.tokenAmount.decimals,
  }));
}

export function getUnderlyingMappings(network: Network): any {
  const underlying = UNDERLYINGS_TO_PUBKEY_MAP[network];
  return underlying;
}

export function getUnderlyingMapping(network: Network, tokenAddress: PublicKey): string {
  const underlying = UNDERLYINGS_TO_PUBKEY_MAP[network][tokenAddress.toString()];

  return underlying != undefined ? underlying : tokenAddress.toString();
}
