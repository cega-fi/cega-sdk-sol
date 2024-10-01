export enum Network {
  LOCALNET = 'localnet',
  DEVNET = 'devnet',
  MAINNET = 'mainnet',
}

export const CLUSTER_URLS = {
  localnet: 'http://127.0.0.1:8899',
  devnet: 'https://api.devnet.solana.com',
  mainnet: 'https://api.mainnet-beta.solana.com',
};
