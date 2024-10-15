import * as dotenv from 'dotenv';
import { BN, Wallet, web3 } from '@project-serum/anchor';
import { PublicKey, Keypair } from '@solana/web3.js';
import { CegaSDK } from '../vault/sdk';
import { Network } from '../common/network';
import { bs58 } from '@project-serum/anchor/dist/cjs/utils/bytes';

dotenv.config();

const RPC_URL = process.env.RPC_URL || '';
const TRANSACTION_TIMEOUT = 10 * 60 * 1000; // 10 minutes
const PROGRAM_ID = process.env.PROGRAM_ID || '';
const ADMIN_WALLET_PK = process.env.ADMIN_PK || '';
const privateKey = bs58.decode(ADMIN_WALLET_PK);
const keypair = Keypair.fromSecretKey(privateKey);
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
  payer: keypair,
};

async function initSdk(wallet: Wallet): Promise<CegaSDK> {
  console.log('Initializing SDK');
  console.log('RPC_URL', RPC_URL);
  console.log('PROGRAM_ID', PROGRAM_ID);
  console.log('ADMIN_WALLET_PK', ADMIN_WALLET_PK);

  const connection = new web3.Connection(RPC_URL, {
    commitment: 'confirmed',
    confirmTransactionInitialTimeout: TRANSACTION_TIMEOUT,
  });
  const sdk = await CegaSDK.load(new PublicKey(PROGRAM_ID), Network.MAINNET, connection, wallet);
  return sdk;
}

export function parseAmountSolana(value: string | number): BN {
  return new BN(value.toString());
}

async function addToDepositQueue(sdk: CegaSDK) {
  const productContractAddress = '5LZJ8MscKPUGToyWtZERSwgKBJ3svPn8rT9Lcp5UnrcY'; // update with the product contract address
  const amount = 100000; // USDC - 6 decimals = 1 USDC
  const productPublicKey = new PublicKey(productContractAddress);
  console.log('Adding to deposit queue');
  const transaction = await sdk.addToDepositQueue(productPublicKey, parseAmountSolana(amount));

  console.log('Transaction', transaction);
}

async function main() {
  const sdk = await initSdk(customWallet);

  console.log('SDK initialized', sdk.state);

  if (sdk) {
    await sdk.updateWallet(customWallet);
    console.log('Wallet updated', sdk.provider.wallet);

    await sdk.updateState();
    console.log('State updated', sdk.state);

    // deposit
    await addToDepositQueue(sdk);
  }

  console.log('Done');
}

main().catch(console.error);
