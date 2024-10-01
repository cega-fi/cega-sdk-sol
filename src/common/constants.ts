import { PublicKey } from '@solana/web3.js';

export const ORACLE_TYPE = {
  pyth: 1,
  switchboard: 2,
};

export const SWITCHBOARD_PRICE_FEEDS = {
  localnet: {},
  devnet: {
    'SOL/USD': new PublicKey('GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR'),
    'BTC/USD': new PublicKey('8SXvChNYFhRq4EZuZvnhjrB3jJRQCv4k3P4W6hesH3Ee'),
    'USDC/USD': new PublicKey('BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW'),
    'ETH/USD': new PublicKey('HNStfhaLnqwF2ZtJUizaA9uHDAVB976r2AgTUx9LrdEo'),
    'RAY/USD': new PublicKey('2oALNZVi5czyHvKbnjE4Jf2gR7dNp1FBpEGaq4PzVAf7'),
    'BNB/USD': new PublicKey('2steFGCbo9FNXksMBGDh9NwixtdG5PdQoaCuR4knyvrB'),
  },
  mainnet: {
    'SOL/USD': new PublicKey('GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR'),
    'BTC/USD': new PublicKey('8SXvChNYFhRq4EZuZvnhjrB3jJRQCv4k3P4W6hesH3Ee'),
    'USDC/USD': new PublicKey('BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW'),
    'ETH/USD': new PublicKey('HNStfhaLnqwF2ZtJUizaA9uHDAVB976r2AgTUx9LrdEo'),
    'RAY/USD': new PublicKey('2oALNZVi5czyHvKbnjE4Jf2gR7dNp1FBpEGaq4PzVAf7'),
    'BNB/USD': new PublicKey('2steFGCbo9FNXksMBGDh9NwixtdG5PdQoaCuR4knyvrB'),
  },
};

export const PYTH_PRICE_FEEDS = {
  localnet: {
    'SOL/USD': new PublicKey('2pRCJksgaoKRMqBfa7NTdd6tLYe9wbDFGCcCCZ6si3F7'),
  },
  devnet: {
    'SOL/USD': new PublicKey('J83w4HKfqxwcq3BEMMkPFSppX3gqekLyLJBexebFVkix'),
    'RAY/USD': new PublicKey('EhgAdTrgxi4ZoVZLQx1n93vULucPpiFi2BQtz9RJr1y6'),
    'MER/USD': new PublicKey('6Z3ejn8DCWQFBuAcw29d3A5jgahEpmycn7YDMX7yRNrn'),
    'SBR/USD': new PublicKey('4WSN3XDSTfBX9A1YXGg8HJ7n2GtWMDNbtz1ab6aGGXfG'),
    'BTC/USD': new PublicKey('HovQMDrbAgAYPCmHVSrezcSmkMtXSSUsLDFANExrZh2J'),
    'MSOL/USD': new PublicKey('9a6RNx3tCu1TSs6TBSfV2XRXEPEZXQ6WB7jRojZRvyeZ'),
    'STSOL/USD': new PublicKey('2LwhbcswZekofMNRtDRMukZJNSRUiKYMFbqtBwqjDfke'),
    'SRM/USD': new PublicKey('992moaMQKs32GKZ9dxi8keyM2bUmbrwBZpK4p2K6X5Vs'),
    'USDC/USD': new PublicKey('5SSkXsEKQepHHAewytPVwdej4epN1nxgLVM84L4KXgy7'),
    'USDT/USD': new PublicKey('C5wDxND9E61RZ1wZhaSTWkoA8udumaHnoQY6BBsiaVpn'),
    'ETH/USD': new PublicKey('EdVCmQ9FSPcVe5YySXDPCRmc8aDQLKJ9xvYBMZPie1Vw'),
    'AVAX/USD': new PublicKey('FVb5h1VmHPfVb1RfqZckchq18GxRv4iKt8T4eVTQAqdz'),
  },
  mainnet: {
    'SOL/USD': new PublicKey('H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG'),
    'MSOL/USD': new PublicKey('E4v1BBgoso9s64TQvmyownAVJbhbEPGyzA3qn4n46qj9'),
    'STSOL/USD': new PublicKey('Bt1hEbY62aMriY1SyQqbeZbm8VmSbQVGBFzSzMuVNWzN'),
    'SRM/USD': new PublicKey('3NBReDRTLKMQEKiLD5tGcx4kXbTf88b7f2xLS9UuGjym'),
    'BTC/USD': new PublicKey('GVXRSBjFk6e6J3NbVPXohDJetcTjaeeuykUpbQF8UoMU'),
    'ETH/USD': new PublicKey('JBu1AL4obBcCMqKBBxhpWCNUt136ijcuMZLFvTP7iWdB'),
    'AVAX/USD': new PublicKey('Ax9ujW5B9oqcv59N8m6f1BpTBq2rGeGaBcpKjC5UYsXU'),
    'LUNA/USD': new PublicKey('5bmWuR1dgP4avtGYMNKLuxumZTVKGgoN2BCMXWDNL9nY'),
    'MNGO/USD': new PublicKey('79wm3jjcPr6RaNQ4DGvP5KxG1mNd3gEBsg6FsNVFezK4'),
    'FTT/USD': new PublicKey('8JPJJkmDScpcNmBRKGZuPuG2GYAveQgP3t5gFuMymwvF'),
    'RAY/USD': new PublicKey('AnLf8tVYCM816gmBjiy8n53eXKKEDydT5piYjjQDPgTB'),
    'SNY/USD': new PublicKey('BkN8hYgRjhyH5WNBQfDV73ivvdqNKfonCMhiYVJ1D9n9'),
    'USDC/USD': new PublicKey('Gnt27xtC473ZT2Mw5u8wZ68Z3gULkSTb5DuxJy7eJotD'),
    'USDT/USD': new PublicKey('3vxLXJqLqF3JG5TCbYycbKWRBbCJQLxQmBGCkyqEEefL'),
    'ORCA/USD': new PublicKey('4ivThkX8uRxBpHsdWSqyXYihzKF3zpRGAUCqyuagnLoV'),
    'SBR/USD': new PublicKey('8Td9VML1nHxQK6M8VVyzsHo32D7VBk72jSpa9U861z2A'),
    // Without pyth oracle feed - use default pubkey.
    'WINJ/USD': PublicKey.default,
    'SCNSOL/USD': PublicKey.default,
  },
};

export const SOL_PUBKEY = new PublicKey('So11111111111111111111111111111111111111112');
export const SOL_DECIMALS = 9;

export const PUBKEY_TO_UNDERLYINGS_MAP = {
  localnet: {
    A8WuCNG5jchCkSgPqKqEZRY7wCRn9D2qHnmeQZkxbt9u: 'MOCK_SRM',
    CV3KAMGe3Q8hQLEEYMJ1aJjmxDyagpVh6Gsvf2DL5URj: 'MOCK_SOL',
    '5AwSyq84wsaiRyYVBdqvSvxP1zeM1sfara3ZVEAjZFB8': 'MOCK_USDC',
    WCuh85EGUrW1qCv6C8FximNUwjfaaAqRwESHX7cBWY7: 'MOCK_CUSDC',
  },
  devnet: {
    A8WuCNG5jchCkSgPqKqEZRY7wCRn9D2qHnmeQZkxbt9u: 'MOCK_SRM',
    CV3KAMGe3Q8hQLEEYMJ1aJjmxDyagpVh6Gsvf2DL5URj: 'MOCK_SOL',
    '5AwSyq84wsaiRyYVBdqvSvxP1zeM1sfara3ZVEAjZFB8': 'MOCK_USDC',
    '4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU': 'USDC',
    So11111111111111111111111111111111111111112: 'SOL',
    // SOLEND COLLATERAL TOKENS
    FzwZWRMc3GCqjSrcpVX3ueJc6UpcV6iWWb7ZMsTXE3Gf: 'SOLEND_CSOL',
    E2PSSXsXJGdpqhhaV3rYPpuy1inRCQAWxcdykA1DTmYr: 'SOLEND_CUSDC',
    C2JUrHN3Jj4CzL1behQ8mHmswBvYGy9UcjNvvCCmEdVT: 'SOLEND_CRAY',
    GVje4h3Sy8mFZgEAdpacZLq7jRLczkU9HcuAZSr6f9YM: 'SOLEND_CSRM',
    Ei2dC7hFxBhVq5pn4qNJLMxKBSojx7p7wnNoBz4HELKG: 'SOLEND_CMSOL',
    ACo8zUxnXNaTvjvN5S56C7KLWzCH4pXjSMU7iAg6dHj8: 'SOLEND_CUSDT',
    '6G9TFs48EkWQodGHAK1fjXC8umqZBdn8Mc8bX5iUvc2j': 'SOLEND_CSOFTT',
    '66F7DZxwKB4KpPy3xFMzRRzh2pLHhJ7qegBM3ejFAwg4': 'SOLEND_CMER',
    '3kqx7NHrBWUD6LuWvvwzocpTVt7TDYbJ3ad7HNUPSBf6': 'SOLEND_CSOETH',
    '4GAGuewTRMfBJukgu3HSzpT48iqP4bYVCq3tygnjqmxL': 'SOLEND_CSBR',
    '7YaBJi5jnuadi5LZBB9NgRt1hPKhA7qQYWkzU11kgRcn': 'SOLEND_CBTC',
  },
  mainnet: {
    So11111111111111111111111111111111111111112: 'SOL',
    EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: 'USDC',
    Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: 'USDT',
    mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So: 'MSOL',
    '7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj': 'STSOL',
    SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt: 'SRM',
    '2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk': 'ETH', // Sollet
    '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E': 'BTC', // Sollet
    F6v4wfAdJB8D8p77bMXZgYt8TDKsYxLYxH5AFhUkYx9W: 'LUNA', // Wormhole
    MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac: 'MNGO',
    AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3: 'FTT', // Sollet
    '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R': 'RAY',
    Hgtvu9gsDTzUpBn69WjrhMyzaQhrAM9piTsezmZVQP6Z: 'WINJ',
    '5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm': 'SCNSOL',
    '4dmKkXNHdgYsXqBHCuMikNQWwVomZURhYvkkX5c4pQ7y': 'SNY',
    // SOLEND COLLATERAL TOKENS
    '4icXEpFVMrcqob6fnd3jZ6KjKrc6cqre6do1f8kKAC1u': 'SOLEND_CMSOL_SOL',
    A38TjtcYrfutXT6nfRxhqwoGiXyzwJsGPmekoZYYmfgP: 'SOLEND_CSOFTT',
    '993dVFL2uXWYeoXuEBFXR4BijeXdTv4s6BzsCjJZuwqk': 'SOLEND_CUSDC',
    '6XrbsKScacEwpEW5DVNko9t5vW3cim9wktAeT9mmiYHS': 'SOLEND_CUSDCT_USDC',
    nZtL8HKX3aQtk3VpdvtdwPpXF2uMia522Pnan2meqdf: 'SOLEND_CUST',
    BsWLxf6hRJnyytKR52kKBiz7qU7BB3SH77mrBxNnYU1G: 'SOLEND_CMER',
    '3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h': 'SOLEND_CMSOL',
    Gqu3TFmJXfnfSX84kqbZ5u9JjSBVoesaHjfTsaPjRSnZ: 'SOLEND_CBTC',
    FbKvdbx5h6F86h1pZuEqv7FxwmsVhJ88cDuSqHvLm6Xf: 'SOLEND_CETH',
    BTsbZDV7aCMRJ3VNy9ygV4Q2UeEo9GpR8D6VvmMZzNr8: 'SOLEND_CUSDT',
    DiMx1n2dJmxqFtENRPhYWsqi8Mhg2p39MpTzsm6phzMP: 'SOLEND_CFTT',
    AFq1sSdevxfqWGcmcz7XpPbfjHevcJY7baZf9RkyrzoR: 'SOLEND_CSCNSOL',
    '5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV': 'SOLEND_CSOL',
    QQ6WK86aUCBvNPkGeYBKikk15sUg6aMUEi5PTL6eB4i: 'SOLEND_CSTSOL',
    AppJPZka33cu4DyUenFe9Dc1ZmZ3oQju6mBn9k37bNAa: 'SOLEND_CSOETH',
    '2d95ZC8L5XP6xCnaKx8D5U5eX6rKbboBBAwuBLxaFmmJ': 'SOLEND_CRAY',
    Bpm2aBL57uqVhgxutfRVrbtnjDpZLV8PZrRrytV1LgeT: 'SOLEND_CSBR',
    E9LAZYxBVhJr9Cdfi9Tn4GSiJHDWSZDsew5tfgJja6Cu: 'SOLEND_CORCA',
    D3Cu5urZJhkKyNZQQq2ne6xSfzbXLU4RrywVErMA2vf8: 'SOLEND_CSLND',
    '4CxGuD2NMr6zM8f18gr6kRhgd748pnmkAhkY1YJtkup1': 'SOLEND_CSRM',
  },
};

export const UNDERLYINGS_TO_PUBKEY_MAP = {
  localnet: {
    MOCK_SRM: 'A8WuCNG5jchCkSgPqKqEZRY7wCRn9D2qHnmeQZkxbt9u',
    MOCK_SOL: 'CV3KAMGe3Q8hQLEEYMJ1aJjmxDyagpVh6Gsvf2DL5URj',
    MOCK_USDC: '5AwSyq84wsaiRyYVBdqvSvxP1zeM1sfara3ZVEAjZFB8',
    MOCK_CUSDC: 'WCuh85EGUrW1qCv6C8FximNUwjfaaAqRwESHX7cBWY7',
  },
  devnet: {
    MOCK_SRM: 'A8WuCNG5jchCkSgPqKqEZRY7wCRn9D2qHnmeQZkxbt9u',
    MOCK_SOL: 'CV3KAMGe3Q8hQLEEYMJ1aJjmxDyagpVh6Gsvf2DL5URj',
    MOCK_USDC: '5AwSyq84wsaiRyYVBdqvSvxP1zeM1sfara3ZVEAjZFB8',
    USDC: '4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU',
    SOL: 'So11111111111111111111111111111111111111112',
    // SOLEND COLLATERAL TOKENS
    SOLEND_CSOL: 'FzwZWRMc3GCqjSrcpVX3ueJc6UpcV6iWWb7ZMsTXE3Gf',
    SOLEND_CUSDC: 'E2PSSXsXJGdpqhhaV3rYPpuy1inRCQAWxcdykA1DTmYr',
    SOLEND_CRAY: 'C2JUrHN3Jj4CzL1behQ8mHmswBvYGy9UcjNvvCCmEdVT',
    SOLEND_CSRM: 'GVje4h3Sy8mFZgEAdpacZLq7jRLczkU9HcuAZSr6f9YM',
    SOLEND_CMSOL: 'Ei2dC7hFxBhVq5pn4qNJLMxKBSojx7p7wnNoBz4HELKG',
    SOLEND_CUSDT: 'ACo8zUxnXNaTvjvN5S56C7KLWzCH4pXjSMU7iAg6dHj8',
    SOLEND_CSOFTT: '6G9TFs48EkWQodGHAK1fjXC8umqZBdn8Mc8bX5iUvc2j',
    SOLEND_CMER: '66F7DZxwKB4KpPy3xFMzRRzh2pLHhJ7qegBM3ejFAwg4',
    SOLEND_CSOETH: '3kqx7NHrBWUD6LuWvvwzocpTVt7TDYbJ3ad7HNUPSBf6',
    SOLEND_CSBR: '4GAGuewTRMfBJukgu3HSzpT48iqP4bYVCq3tygnjqmxL',
    SOLEND_CBTC: '7YaBJi5jnuadi5LZBB9NgRt1hPKhA7qQYWkzU11kgRcn',
  },
  mainnet: {
    SOL: 'So11111111111111111111111111111111111111112',
    USDC: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    USDT: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
    MSOL: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
    STSOL: '7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj',
    SRM: 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt',
    ETH: '2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk', // Sollet
    BTC: '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E', // Sollet
    LUNA: 'F6v4wfAdJB8D8p77bMXZgYt8TDKsYxLYxH5AFhUkYx9W', // Wormhole
    MNGO: 'MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac',
    FTT: 'AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3', // Sollet
    RAY: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R',
    WINJ: 'Hgtvu9gsDTzUpBn69WjrhMyzaQhrAM9piTsezmZVQP6Z',
    SCNSOL: '5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm',
    SNY: '4dmKkXNHdgYsXqBHCuMikNQWwVomZURhYvkkX5c4pQ7y',
    // SOLEND COLLATERAL TOKENS
    SOLEND_CMSOL_SOL: '4icXEpFVMrcqob6fnd3jZ6KjKrc6cqre6do1f8kKAC1u',
    SOLEND_CSOFTT: 'A38TjtcYrfutXT6nfRxhqwoGiXyzwJsGPmekoZYYmfgP',
    SOLEND_CUSDC: '993dVFL2uXWYeoXuEBFXR4BijeXdTv4s6BzsCjJZuwqk',
    SOLEND_CUSDCT_USDC: '6XrbsKScacEwpEW5DVNko9t5vW3cim9wktAeT9mmiYHS',
    SOLEND_CUST: 'nZtL8HKX3aQtk3VpdvtdwPpXF2uMia522Pnan2meqdf',
    SOLEND_CMER: 'BsWLxf6hRJnyytKR52kKBiz7qU7BB3SH77mrBxNnYU1G',
    SOLEND_CMSOL: '3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h',
    SOLEND_CBTC: 'Gqu3TFmJXfnfSX84kqbZ5u9JjSBVoesaHjfTsaPjRSnZ',
    SOLEND_CETH: 'FbKvdbx5h6F86h1pZuEqv7FxwmsVhJ88cDuSqHvLm6Xf',
    SOLEND_CUSDT: 'BTsbZDV7aCMRJ3VNy9ygV4Q2UeEo9GpR8D6VvmMZzNr8',
    SOLEND_CFTT: 'DiMx1n2dJmxqFtENRPhYWsqi8Mhg2p39MpTzsm6phzMP',
    SOLEND_CSCNSOL: 'AFq1sSdevxfqWGcmcz7XpPbfjHevcJY7baZf9RkyrzoR',
    SOLEND_CSOL: '5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV',
    SOLEND_CSTSOL: 'QQ6WK86aUCBvNPkGeYBKikk15sUg6aMUEi5PTL6eB4i',
    SOLEND_CSOETH: 'AppJPZka33cu4DyUenFe9Dc1ZmZ3oQju6mBn9k37bNAa',
    SOLEND_CRAY: '2d95ZC8L5XP6xCnaKx8D5U5eX6rKbboBBAwuBLxaFmmJ',
    SOLEND_CSBR: 'Bpm2aBL57uqVhgxutfRVrbtnjDpZLV8PZrRrytV1LgeT',
    SOLEND_CORCA: 'E9LAZYxBVhJr9Cdfi9Tn4GSiJHDWSZDsew5tfgJja6Cu',
    SOLEND_CSLND: 'D3Cu5urZJhkKyNZQQq2ne6xSfzbXLU4RrywVErMA2vf8',
    SOLEND_CSRM: '4CxGuD2NMr6zM8f18gr6kRhgd748pnmkAhkY1YJtkup1',
  },
};
