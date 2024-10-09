import * as dotenv from 'dotenv';
import { BN, web3 } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
import { CegaSDK } from '../vault/sdk';
import { Network } from '../common/network';
import { DummyWallet, Wallet } from '../common/types';
import { bs58 } from '@project-serum/anchor/dist/cjs/utils/bytes';

dotenv.config();

const RPC_URL = process.env.RPC_URL || '';
const TRANSACTION_TIMEOUT = 10 * 60 * 1000; // 10 minutes
const PROGRAM_ID = process.env.PROGRAM_ID || '';
const ADMIN_WALLET_PK = process.env.ADMIN_PK || '';
const privateKey = bs58.decode(ADMIN_WALLET_PK);
const keypair = web3.Keypair.fromSecretKey(privateKey);

async function initSdk(): Promise<CegaSDK> {
  console.log('Initializing SDK');
  console.log('RPC_URL', RPC_URL);
  console.log('PROGRAM_ID', PROGRAM_ID);

  const connection = new web3.Connection(RPC_URL, {
    commitment: 'processed',
    confirmTransactionInitialTimeout: TRANSACTION_TIMEOUT,
  });
  const sdk = await CegaSDK.load(
    new PublicKey(PROGRAM_ID),
    Network.MAINNET,
    connection,
    new DummyWallet(),
  );
  return sdk;
}

async function updateWallet(sdk: CegaSDK) {
  // Create a custom wallet object that implements the Wallet interface
  const customWallet: Wallet = {
    publicKey: keypair.publicKey,
    signTransaction: async (transaction) => {
      transaction.sign(keypair);
      return transaction;
    },
    signAllTransactions: async (transactions) => {
      return transactions.map((tx) => {
        tx.sign(keypair);
        return tx;
      });
    },
  };

  console.log('Updating wallet');
  await sdk.updateWallet(customWallet);
}

export function parseAmountSolana(value: string | number): BN {
  return new BN(value.toString());
}

async function addToDepositQueue(sdk: CegaSDK) {
  const productContractAddress = 'HGAp6kzGpk9NwYLA1xmNH5AjJx3M37SvBXc7kWfST9dz'; // update with the product contract address
  const amount = 100000; // USDC - 6 decimals = 1 USDC
  const productPublicKey = new PublicKey(productContractAddress);
  console.log('Adding to deposit queue');
  const transaction = await sdk.addToDepositQueue(productPublicKey, parseAmountSolana(amount));

  console.log('Transaction', transaction);
}

async function main() {
  const sdk = await initSdk();

  console.log('SDK initialized', sdk.state);

  if (sdk) {
    await updateWallet(sdk);
    console.log('Wallet updated', sdk.state.admin);

    await sdk.updateState();
    console.log('State updated', sdk.state);

    // deposit
    await addToDepositQueue(sdk);
  }

  console.log('Done');
}

main().catch(console.error);
