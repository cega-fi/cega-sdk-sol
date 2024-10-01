import * as anchor from '@project-serum/anchor';
import vaultIdl from '../idl/cega_vault.json';

export class TransactionError extends Error {
  code: number;

  txId: string;

  constructor(msg: string, name: string, code: number, txId: string) {
    super(msg);
    this.name = name;
    this.code = code;
    this.txId = txId;
  }
}

export function parseIdlErrors(idl: anchor.Idl): Map<number, string> {
  const errors = new Map();
  if (idl.errors) {
    idl.errors.forEach((e) => {
      const msg = e.msg ?? e.name;
      errors.set(e.code, msg);
    });
  }
  return errors;
}

export const vaultIdlErrors = parseIdlErrors(vaultIdl as anchor.Idl);
