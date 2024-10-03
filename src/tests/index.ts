import * as dotenv from 'dotenv';
import { web3 } from '@project-serum/anchor';
import { Commitment, Connection, PublicKey } from '@solana/web3.js';
import { CegaSDK } from '../vault/sdk';
import { Network } from '../common/network';
import { DummyWallet } from '../common/types';

dotenv.config();

const RPC_URL = process.env.RPC_URL || '';
const TRANSACTION_TIMEOUT = 10 * 60 * 1000; // 10 minutes
const PROGRAM_ID = process.env.PROGRAM_ID || '';

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

async function main() {
  const sdk = await initSdk();

  console.log('SDK initialized', sdk.state);
}

main().catch(console.error);
