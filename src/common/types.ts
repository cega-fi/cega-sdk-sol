import { PublicKey, Transaction } from '@solana/web3.js';
import * as anchor from '@project-serum/anchor';

export interface TokenAccount {
  mint: PublicKey;
  owner: PublicKey;
  amount: anchor.BN;
  decimals: number;
}
