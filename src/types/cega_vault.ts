export type CegaVault = {
  version: '0.1.0';
  name: 'cega_vault';
  instructions: [
    {
      name: 'initializeState';
      accounts: [
        {
          name: 'state';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'productAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'feeRecipient';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'programAdmin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'admin';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: 'InitializeStateArgs';
          };
        },
      ];
    },
    {
      name: 'updateAdmin';
      accounts: [
        {
          name: 'state';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'programAdmin';
          isMut: false;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'nextAdmin';
          type: 'publicKey';
        },
      ];
    },
    {
      name: 'acceptAdminUpdate';
      accounts: [
        {
          name: 'state';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'newAdmin';
          isMut: false;
          isSigner: true;
        },
      ];
      args: [];
    },
    {
      name: 'updateFeeRecipient';
      accounts: [
        {
          name: 'state';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'programAdmin';
          isMut: false;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'newFeeRecipient';
          type: 'publicKey';
        },
      ];
    },
    {
      name: 'updateTraderAdmin';
      accounts: [
        {
          name: 'state';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'programAdmin';
          isMut: false;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'newTraderAdmin';
          type: 'publicKey';
        },
      ];
    },
    {
      name: 'updateMapleAccount';
      accounts: [
        {
          name: 'state';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'programAdmin';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'newMapleAccount';
          type: 'publicKey';
        },
      ];
    },
    {
      name: 'updateFees';
      accounts: [
        {
          name: 'state';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: 'UpdateFeesArgs';
          };
        },
      ];
    },
    {
      name: 'fundProductAuthority';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'productAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'initializeProduct';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'productAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'underlyingMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'productUnderlyingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'depositQueueHeader';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mapleAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: 'InitializeProductArgs';
          };
        },
      ];
    },
    {
      name: 'initializeVault';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'traderAdmin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'productAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'underlyingMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'redeemableMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'optionMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'productUnderlyingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vaultOptionTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vaultWithdrawQueueRedeemableTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'withdrawQueueHeader';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'structuredProductInfoAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: 'InitializeVaultArgs';
          };
        },
      ];
    },
    {
      name: 'initializeStructuredProduct';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'traderAdmin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'structuredProductInfoAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: 'InitializeStructuredProductArgs';
          };
        },
      ];
    },
    {
      name: 'initializeOptionBarrier';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'traderAdmin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'optionBarrier';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'oracle';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: 'InitializeOptionBarrierArgs';
          };
        },
      ];
    },
    {
      name: 'initializeProgramUsdcAccount';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'traderAdmin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'productAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'underlyingMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'programUsdcTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'updateOptionBarrierDetails';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'vault';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'optionBarrier';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'oracle';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: 'UpdateOptionBarrierDetailsArgs';
          };
        },
      ];
    },
    {
      name: 'updateVaultEpochTimes';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'traderAdmin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: 'UpdateVaultEpochTimesArgs';
          };
        },
      ];
    },
    {
      name: 'updateMaxDepositLimit';
      accounts: [
        {
          name: 'state';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'traderAdmin';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'newDepositLimit';
          type: 'u64';
        },
      ];
    },
    {
      name: 'updateProductFees';
      accounts: [
        {
          name: 'state';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'newManagementFeePercentage';
          type: 'u64';
        },
      ];
    },
    {
      name: 'updateApr';
      accounts: [
        {
          name: 'state';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'traderAdmin';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'structuredProductInfoAccount';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'newApr';
          type: 'u64';
        },
      ];
    },
    {
      name: 'updateTenorInDays';
      accounts: [
        {
          name: 'state';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'structuredProductInfoAccount';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'newTenorInDays';
          type: 'u64';
        },
      ];
    },
    {
      name: 'setProductDepositQueue';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'productAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'depositQueueHeader';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'setProductState';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'productAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: 'SetProductStateArgs';
          };
        },
      ];
    },
    {
      name: 'depositVault';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'productAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userAuthority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'depositInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'underlyingMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'redeemableMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'productUnderlyingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userUnderlyingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userRedeemableTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: 'DepositVaultArgs';
          };
        },
      ];
    },
    {
      name: 'addToDepositQueue';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'productAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userAuthority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'underlyingMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'productUnderlyingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userUnderlyingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'depositQueueHeader';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'newQueueNode';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: 'AddToDepositQueueArgs';
          };
        },
      ];
    },
    {
      name: 'processDepositQueue';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'traderAdmin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'productAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'underlyingMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'redeemableMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'productUnderlyingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'depositQueueHeader';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'withdrawVault';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userAuthority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'userUnderlyingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userRedeemableTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'underlyingMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'redeemableMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'productUnderlyingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vaultWithdrawQueueRedeemableTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'withdrawQueueHeader';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'newQueueNode';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: 'WithdrawVaultArgs';
          };
        },
      ];
    },
    {
      name: 'processWithdrawQueue';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'traderAdmin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'productAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'underlyingMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'redeemableMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'productUnderlyingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vaultWithdrawQueueRedeemableTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'withdrawQueueHeader';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'transferToProgramUnderlyingTokenAccount';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'traderAdmin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'productAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'underlyingMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'productUnderlyingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'programUsdcTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'redeemableMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'sendFundsToMarketMakers';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'traderAdmin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'productAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'programUsdcTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'underlyingMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'recieverWalletAddress';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'recieverUnderlyingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amountToSend';
          type: 'u64';
        },
      ];
    },
    {
      name: 'transferToProductUnderlyingTokenAccount';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'traderAdmin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'productAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'underlyingMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'productUnderlyingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'programUsdcTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amountToTrade';
          type: 'u64';
        },
      ];
    },
    {
      name: 'transferToCega';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userAuthority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'productAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'underlyingMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userUnderlyingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'programUsdcTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: 'TransferToCegaArgs';
          };
        },
      ];
    },
    {
      name: 'collectFees';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'traderAdmin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'productAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'underlyingMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'productUnderlyingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'feeRecipientTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'calculateCurrentYield';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'product';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'structuredProductInfoAccount';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'calculateVaultPayoff';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'productAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'structuredProductInfoAccount';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'calculationAgent';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'structuredProductInfoAccount';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'rolloverVault';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'traderAdmin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'overrideObservationPeriod';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'traderAdmin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'optionBarrier';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: 'OverrideObservationPeriodArgs';
          };
        },
      ];
    },
    {
      name: 'overrideVaultBarriers';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: 'OverrideVaultBarriersArgs';
          };
        },
      ];
    },
    {
      name: 'overrideOptionBarrierPrice';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'optionBarrier';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'price';
          type: 'u128';
        },
      ];
    },
    {
      name: 'setOptionBarrierAbs';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'traderAdmin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'optionBarrier';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: 'SetOptionBarrierAbsArgs';
          };
        },
      ];
    },
    {
      name: 'transferBetweenProducts';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'productAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'productFrom';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'productFromUnderlyingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'productDestination';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'productDestinationUnderlyingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'overrideVaultStatus';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'updatedStatus';
          type: 'u64';
        },
      ];
    },
    {
      name: 'rollbackKnockOutEvent';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'createTokenMetadata';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'productAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'redeemableMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'metadataAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'metadataProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: 'CreateTokenMetadataArgs';
          };
        },
      ];
    },
    {
      name: 'updateTokenMetadata';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'productAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'redeemableMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'metadataAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'metadataProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: 'CreateTokenMetadataArgs';
          };
        },
      ];
    },
    {
      name: 'updateUnderlyingAmount';
      accounts: [
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'productAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'underlyingMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'product';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'productUnderlyingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'programUsdcTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
      ];
    },
  ];
  accounts: [
    {
      name: 'state';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'stateNonce';
            type: 'u8';
          },
          {
            name: 'productAuthorityNonce';
            type: 'u8';
          },
          {
            name: 'programAdmin';
            type: 'publicKey';
          },
          {
            name: 'admin';
            type: 'publicKey';
          },
          {
            name: 'nextAdmin';
            type: 'publicKey';
          },
          {
            name: 'yieldFeePercentage';
            type: 'u32';
          },
          {
            name: 'managementFeePercentage';
            type: 'u32';
          },
          {
            name: 'feeRecipient';
            type: 'publicKey';
          },
          {
            name: 'traderAdmin';
            type: 'publicKey';
          },
          {
            name: 'programUsdcTokenAccount';
            type: 'publicKey';
          },
          {
            name: 'extraBoolOne';
            type: 'bool';
          },
          {
            name: 'extraBoolTwo';
            type: 'bool';
          },
        ];
      };
    },
    {
      name: 'product';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'productName';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'productNonce';
            type: 'u8';
          },
          {
            name: 'productUnderlyingTokenAccountNonce';
            type: 'u8';
          },
          {
            name: 'productCounter';
            type: 'u64';
          },
          {
            name: 'underlyingMint';
            type: 'publicKey';
          },
          {
            name: 'productUnderlyingTokenAccount';
            type: 'publicKey';
          },
          {
            name: 'maxDepositLimit';
            type: 'u64';
          },
          {
            name: 'underlyingAmount';
            type: 'u64';
          },
          {
            name: 'mapleAccount';
            type: 'publicKey';
          },
          {
            name: 'depositQueueHeaderNonce';
            type: 'u8';
          },
          {
            name: 'depositQueueHeader';
            type: 'publicKey';
          },
          {
            name: 'isActive';
            type: 'bool';
          },
          {
            name: 'managementFeePercentage';
            type: 'u64';
          },
          {
            name: 'extraPubkeyOne';
            type: 'publicKey';
          },
          {
            name: 'extraPubkeyTwo';
            type: 'publicKey';
          },
          {
            name: 'extraUint64Two';
            type: 'u64';
          },
          {
            name: 'extraUint64Three';
            type: 'u64';
          },
          {
            name: 'extraBoolOne';
            type: 'bool';
          },
        ];
      };
    },
    {
      name: 'depositInfo';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'depositInfoNonce';
            type: 'u8';
          },
          {
            name: 'userKey';
            type: 'publicKey';
          },
          {
            name: 'product';
            type: 'publicKey';
          },
          {
            name: 'vault';
            type: 'publicKey';
          },
          {
            name: 'usdcDeposit';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'vault';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'productName';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'vaultNumber';
            type: 'u64';
          },
          {
            name: 'status';
            type: {
              defined: 'VaultStatus';
            };
          },
          {
            name: 'vaultNonce';
            type: 'u8';
          },
          {
            name: 'redeemableMintNonce';
            type: 'u8';
          },
          {
            name: 'optionMintNonce';
            type: 'u8';
          },
          {
            name: 'vaultUnderlyingTokenAccountNonce';
            type: 'u8';
          },
          {
            name: 'vaultOptionTokenAccountNonce';
            type: 'u8';
          },
          {
            name: 'vaultWithdrawQueueRedeemableTokenAccountNonce';
            type: 'u8';
          },
          {
            name: 'withdrawQueueHeaderNonce';
            type: 'u8';
          },
          {
            name: 'structuredProductInfoAccountNonce';
            type: 'u8';
          },
          {
            name: 'underlyingMint';
            type: 'publicKey';
          },
          {
            name: 'redeemableMint';
            type: 'publicKey';
          },
          {
            name: 'optionMint';
            type: 'publicKey';
          },
          {
            name: 'vaultUnderlyingTokenAccount';
            type: 'publicKey';
          },
          {
            name: 'vaultOptionTokenAccount';
            type: 'publicKey';
          },
          {
            name: 'vaultWithdrawQueueRedeemableTokenAccount';
            type: 'publicKey';
          },
          {
            name: 'underlyingAmount';
            type: 'u64';
          },
          {
            name: 'vaultTotalCouponPayoff';
            type: 'u64';
          },
          {
            name: 'knockInEvent';
            type: 'bool';
          },
          {
            name: 'knockOutEvent';
            type: 'bool';
          },
          {
            name: 'vaultFinalPayoff';
            type: 'u64';
          },
          {
            name: 'epochSequenceNumber';
            type: 'u64';
          },
          {
            name: 'startEpoch';
            type: 'u64';
          },
          {
            name: 'endEpoch';
            type: 'u64';
          },
          {
            name: 'epochCadence';
            type: 'u32';
          },
          {
            name: 'startDeposits';
            type: 'u64';
          },
          {
            name: 'endDeposits';
            type: 'u64';
          },
          {
            name: 'tradeDate';
            type: 'u64';
          },
          {
            name: 'withdrawQueueHeader';
            type: 'publicKey';
          },
          {
            name: 'structuredProductInfoAccount';
            type: 'publicKey';
          },
          {
            name: 'extraPubkeyOne';
            type: 'publicKey';
          },
          {
            name: 'extraPubkeyTwo';
            type: 'publicKey';
          },
          {
            name: 'extraPubkeyThree';
            type: 'publicKey';
          },
          {
            name: 'extraUint64One';
            type: 'u64';
          },
          {
            name: 'extraUint64Two';
            type: 'u64';
          },
          {
            name: 'extraUint64Three';
            type: 'u64';
          },
          {
            name: 'extraBoolOne';
            type: 'bool';
          },
          {
            name: 'extraBoolTwo';
            type: 'bool';
          },
          {
            name: 'extraBoolThree';
            type: 'bool';
          },
        ];
      };
    },
    {
      name: 'structuredProductInfoAccount';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'structuredProductInfoAccountNonce';
            type: 'u8';
          },
          {
            name: 'epochSequenceNumber';
            type: 'u64';
          },
          {
            name: 'numberOfPuts';
            type: 'u64';
          },
          {
            name: 'putOne';
            type: 'publicKey';
          },
          {
            name: 'putTwo';
            type: 'publicKey';
          },
          {
            name: 'putThree';
            type: 'publicKey';
          },
          {
            name: 'putFour';
            type: 'publicKey';
          },
          {
            name: 'putFive';
            type: 'publicKey';
          },
          {
            name: 'aprPercentage';
            type: 'u64';
          },
          {
            name: 'tenorInDays';
            type: 'u64';
          },
          {
            name: 'daysPassed';
            type: 'u64';
          },
          {
            name: 'extraPubkeyOne';
            type: 'publicKey';
          },
          {
            name: 'extraPubkeyTwo';
            type: 'publicKey';
          },
          {
            name: 'extraPubkeyThree';
            type: 'publicKey';
          },
          {
            name: 'extraUint64One';
            type: 'u64';
          },
          {
            name: 'extraUint64Two';
            type: 'u64';
          },
          {
            name: 'extraUint64Three';
            type: 'u64';
          },
          {
            name: 'extraBoolOne';
            type: 'bool';
          },
          {
            name: 'extraBoolTwo';
            type: 'bool';
          },
          {
            name: 'extraBoolThree';
            type: 'bool';
          },
        ];
      };
    },
    {
      name: 'optionBarrier';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'optionBarrierNonce';
            type: 'u8';
          },
          {
            name: 'optionExists';
            type: 'bool';
          },
          {
            name: 'assetName';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'optionNumber';
            type: 'u64';
          },
          {
            name: 'assetMint';
            type: 'publicKey';
          },
          {
            name: 'strikeAbs';
            type: {
              option: 'u64';
            };
          },
          {
            name: 'knockInAbs';
            type: {
              option: 'u64';
            };
          },
          {
            name: 'knockOutAbs';
            type: {
              option: 'u64';
            };
          },
          {
            name: 'lastPrice';
            type: {
              option: 'u128';
            };
          },
          {
            name: 'lastPriceTime';
            type: {
              option: 'u64';
            };
          },
          {
            name: 'oracle';
            type: 'publicKey';
          },
          {
            name: 'oracleType';
            type: 'u8';
          },
          {
            name: 'observationTime';
            type: 'u64';
          },
          {
            name: 'timeBuffer';
            type: 'u64';
          },
          {
            name: 'timeIncrement';
            type: 'u64';
          },
          {
            name: 'isOverridePrice';
            type: 'bool';
          },
          {
            name: 'overridePrice';
            type: 'u128';
          },
          {
            name: 'extraPubkeyOne';
            type: 'publicKey';
          },
          {
            name: 'extraPubkeyTwo';
            type: 'publicKey';
          },
          {
            name: 'extraPubkeyThree';
            type: 'publicKey';
          },
          {
            name: 'extraUint64One';
            type: 'u64';
          },
          {
            name: 'extraUint64Two';
            type: 'u64';
          },
          {
            name: 'extraUint64Three';
            type: 'u64';
          },
          {
            name: 'extraBoolOne';
            type: 'bool';
          },
          {
            name: 'extraBoolTwo';
            type: 'bool';
          },
          {
            name: 'extraBoolThree';
            type: 'bool';
          },
        ];
      };
    },
    {
      name: 'queueHeader';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'count';
            type: 'u64';
          },
          {
            name: 'seqNum';
            type: 'u64';
          },
          {
            name: 'head';
            type: 'publicKey';
          },
          {
            name: 'tail';
            type: 'publicKey';
          },
        ];
      };
    },
    {
      name: 'queueNode';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amount';
            type: 'u64';
          },
          {
            name: 'nextNode';
            type: 'publicKey';
          },
          {
            name: 'userKey';
            type: 'publicKey';
          },
        ];
      };
    },
  ];
  types: [
    {
      name: 'FeeRecipient';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'recipient';
            type: 'publicKey';
          },
          {
            name: 'percentage';
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'InitializeStateArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'productAuthorityNonce';
            type: 'u8';
          },
          {
            name: 'yieldFeePercentage';
            type: 'u32';
          },
          {
            name: 'managementFeePercentage';
            type: 'u32';
          },
        ];
      };
    },
    {
      name: 'UpdateFeesArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'yieldFeePercentage';
            type: 'u32';
          },
          {
            name: 'managementFeePercentage';
            type: 'u32';
          },
        ];
      };
    },
    {
      name: 'UpdateVaultEpochTimesArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'startEpoch';
            type: 'u64';
          },
          {
            name: 'endEpoch';
            type: 'u64';
          },
          {
            name: 'startDeposits';
            type: 'u64';
          },
          {
            name: 'endDeposits';
            type: 'u64';
          },
          {
            name: 'epochCadence';
            type: 'u32';
          },
        ];
      };
    },
    {
      name: 'OverrideObservationPeriodArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'observationTime';
            type: {
              option: 'u64';
            };
          },
          {
            name: 'timeBuffer';
            type: {
              option: 'u64';
            };
          },
          {
            name: 'timeIncrement';
            type: {
              option: 'u64';
            };
          },
        ];
      };
    },
    {
      name: 'InitializeProductArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'productName';
            type: 'string';
          },
          {
            name: 'maxDepositLimit';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'InitializeVaultArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'epochSequenceNumber';
            type: 'u64';
          },
          {
            name: 'startEpoch';
            type: 'u64';
          },
          {
            name: 'endEpoch';
            type: 'u64';
          },
          {
            name: 'epochCadence';
            type: 'u32';
          },
          {
            name: 'startDeposits';
            type: 'u64';
          },
          {
            name: 'endDeposits';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'SetProductStateArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'newProductState';
            type: 'bool';
          },
        ];
      };
    },
    {
      name: 'InitializeOptionBarrierArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'assetName';
            type: 'string';
          },
          {
            name: 'optionNumber';
            type: 'u64';
          },
          {
            name: 'strikePercentage';
            type: 'u64';
          },
          {
            name: 'knockInPercentage';
            type: 'u64';
          },
          {
            name: 'knockOutPercentage';
            type: 'u64';
          },
          {
            name: 'oracleType';
            type: 'u8';
          },
          {
            name: 'observationTime';
            type: 'u64';
          },
          {
            name: 'timeBuffer';
            type: 'u64';
          },
          {
            name: 'timeIncrement';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'UpdateOptionBarrierDetailsArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'assetName';
            type: 'string';
          },
          {
            name: 'oracleType';
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'InitializeStructuredProductArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'aprPercentage';
            type: 'u64';
          },
          {
            name: 'tenorInDays';
            type: 'u64';
          },
          {
            name: 'numberOfPuts';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'DepositVaultArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'underlyingAmount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'AddToDepositQueueArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'depositAmount';
            type: 'u64';
          },
          {
            name: 'newDepositQueueNodeNonce';
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'TransferToCegaArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'transferAmount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'WithdrawVaultArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'redeemableAmount';
            type: 'u64';
          },
          {
            name: 'newWithdrawQueueNodeNonce';
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'SendFundsToMarketMakersArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'recieverAddress';
            type: 'publicKey';
          },
          {
            name: 'amountToSend';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'OverrideVaultBarriersArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'knockIn';
            type: 'bool';
          },
          {
            name: 'knockOut';
            type: 'bool';
          },
        ];
      };
    },
    {
      name: 'SetOptionBarrierAbsArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'strike';
            type: {
              option: 'u64';
            };
          },
          {
            name: 'knockIn';
            type: {
              option: 'u64';
            };
          },
          {
            name: 'knockOut';
            type: {
              option: 'u64';
            };
          },
        ];
      };
    },
    {
      name: 'CreateTokenMetadataArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'name';
            type: 'string';
          },
          {
            name: 'symbol';
            type: 'string';
          },
          {
            name: 'uri';
            type: 'string';
          },
        ];
      };
    },
    {
      name: 'VaultStatus';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'NotTraded';
          },
          {
            name: 'Traded';
          },
          {
            name: 'EpochEnded';
          },
          {
            name: 'PayoffCalculated';
          },
          {
            name: 'FeesCollected';
          },
          {
            name: 'ProcessingWithdrawQueue';
          },
          {
            name: 'WithdrawQueueProcessed';
          },
          {
            name: 'Zombie';
          },
          {
            name: 'ProcessingDepositQueue';
          },
          {
            name: 'DepositQueueProcessed';
          },
        ];
      };
    },
    {
      name: 'OracleType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Nil';
          },
          {
            name: 'Pyth';
          },
          {
            name: 'Switchboard';
          },
        ];
      };
    },
  ];
  events: [
    {
      name: 'DepositEvent';
      fields: [
        {
          name: 'user';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'vault';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'amount';
          type: 'u64';
          index: false;
        },
        {
          name: 'redeemableMinted';
          type: 'u64';
          index: false;
        },
        {
          name: 'timestamp';
          type: 'u64';
          index: false;
        },
        {
          name: 'slot';
          type: 'u64';
          index: false;
        },
      ];
    },
    {
      name: 'WithdrawalEvent';
      fields: [
        {
          name: 'user';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'vault';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'redeemableBurnt';
          type: 'u64';
          index: false;
        },
        {
          name: 'underlyingReceived';
          type: 'u64';
          index: false;
        },
        {
          name: 'timestamp';
          type: 'u64';
          index: false;
        },
        {
          name: 'slot';
          type: 'u64';
          index: false;
        },
      ];
    },
    {
      name: 'KnockOutEvent';
      fields: [
        {
          name: 'vault';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'asset';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'spot';
          type: 'u64';
          index: false;
        },
        {
          name: 'timestamp';
          type: 'u64';
          index: false;
        },
      ];
    },
  ];
  errors: [
    {
      code: 6000;
      name: 'InvalidUsdMint';
      msg: 'Invalid USD mint';
    },
    {
      code: 6001;
      name: 'InvalidMarketMakerAddress';
      msg: 'Invalid market maker address';
    },
    {
      code: 6002;
      name: 'VaultFuture';
      msg: 'Epoch must start in the future';
    },
    {
      code: 6003;
      name: 'SeqTimes';
      msg: 'Epoch times are non-sequential';
    },
    {
      code: 6004;
      name: 'StartEpochTime';
      msg: 'Epoch has not started';
    },
    {
      code: 6005;
      name: 'EndDepositsTime';
      msg: 'Deposits period has ended';
    },
    {
      code: 6006;
      name: 'EndEpochTime';
      msg: 'Epoch has ended';
    },
    {
      code: 6007;
      name: 'EpochNotOver';
      msg: 'Epoch has not finished yet';
    },
    {
      code: 6008;
      name: 'InsufficientUnderlyingTokens';
      msg: 'Insufficient underlying tokens';
    },
    {
      code: 6009;
      name: 'InsufficientRedeemableTokens';
      msg: 'Insufficient redeemable tokens';
    },
    {
      code: 6010;
      name: 'InvalidDepositTime';
      msg: 'Invalid deposit time';
    },
    {
      code: 6011;
      name: 'UnderlyingNotEqRedeem';
      msg: "Underlying total and redeemable total don't match";
    },
    {
      code: 6012;
      name: 'InvalidUnderlyingMint';
      msg: 'Invalid underlying mint';
    },
    {
      code: 6013;
      name: 'InvalidUserUnderlyingAccountOwner';
      msg: 'Invalid user underlying account owner';
    },
    {
      code: 6014;
      name: 'InvalidVaultAdmin';
      msg: 'Invalid vault admin';
    },
    {
      code: 6015;
      name: 'InvalidTraderAdmin';
      msg: 'Invalid trader admin';
    },
    {
      code: 6016;
      name: 'InvalidUserRedeemableOwner';
      msg: 'Invalid user redeemable owner';
    },
    {
      code: 6017;
      name: 'InvalidUserRedeemableMint';
      msg: 'Invalid user redeemable mint';
    },
    {
      code: 6018;
      name: 'InvalidFeeRecipients';
      msg: 'Invalid fee recipients';
    },
    {
      code: 6019;
      name: 'FeeRecipientOwnerMismatch';
      msg: 'Fee recipient owner mismatch';
    },
    {
      code: 6020;
      name: 'FeeRecipientTokenMintMismatch';
      msg: 'Fee recipient token mint mismatch';
    },
    {
      code: 6021;
      name: 'InvalidOptionMint';
      msg: 'Invalid option mint';
    },
    {
      code: 6022;
      name: 'MintNotCreatedForThisEpoch';
      msg: 'Mint not yet initialized for this epoch';
    },
    {
      code: 6023;
      name: 'DepositExceedsDepositLimit';
      msg: 'Deposit exceeds deposit limit';
    },
    {
      code: 6024;
      name: 'AccountDidNotSerialize';
      msg: 'Failed to serialize the account';
    },
    {
      code: 6025;
      name: 'DepositQueueNotEmpty';
      msg: 'Deposit queue not empty';
    },
    {
      code: 6026;
      name: 'IncorrectRemainingAccountsForInsertQueue';
      msg: 'Incorrect remaining accounts passed in for insert queue';
    },
    {
      code: 6027;
      name: 'QueueTailNotMutable';
      msg: 'Queue tail not mutable';
    },
    {
      code: 6028;
      name: 'EmptyQueue';
      msg: 'Cannot remove node from empty queue';
    },
    {
      code: 6029;
      name: 'NodeIsNotTail';
      msg: 'Node passed in is not the tail';
    },
    {
      code: 6030;
      name: 'TooManyRemainingAccountsForRemoveQueueNode';
      msg: 'Too many remaining accounts to remove queued node';
    },
    {
      code: 6031;
      name: 'PrevNodeRequiredForRemoveQueueNode';
      msg: 'Removing this queue node requires the previous node';
    },
    {
      code: 6032;
      name: 'UserNotMatchingQueueNode';
      msg: 'User does not match the queue node to be processed';
    },
    {
      code: 6033;
      name: 'MustBeKnockOut';
      msg: "Vault must be KO'd to override";
    },
    {
      code: 6034;
      name: 'WithdrawQueueMustBeEmpty';
      msg: 'Withdrawal queue must be empty to process deposit queue';
    },
    {
      code: 6035;
      name: 'IncorrectRemainingAccountsForProcessQueue';
      msg: 'Incorrect number of remaining accounts to process queue';
    },
    {
      code: 6036;
      name: 'IncorrectQueueNodeForProcessQueue';
      msg: 'Queue node to process does not match the queueheader head';
    },
    {
      code: 6037;
      name: 'IncorrectUserAuthorityForTokenAccount';
      msg: 'User does not match the owner of the token account';
    },
    {
      code: 6038;
      name: 'PushRequiresPrevNodeIfNotEmpty';
      msg: 'Push requires prev node if not empty';
    },
    {
      code: 6039;
      name: 'CannotBurnZeroOptions';
      msg: 'Cannot burn zero options';
    },
    {
      code: 6040;
      name: 'CannotExerciseZeroOptions';
      msg: 'Cannot exercise zero options';
    },
    {
      code: 6041;
      name: 'CannotWithdrawZeroAmount';
      msg: 'Cannot withdraw zero amount';
    },
    {
      code: 6042;
      name: 'CannotOverrideEpochTimesWhileOptionExists';
      msg: 'Cannot override epoch times while option exists';
    },
    {
      code: 6043;
      name: 'CannotInitializeOptionUntilAfterDepositEnd';
      msg: 'Cannot initialize option until after deposit end';
    },
    {
      code: 6044;
      name: 'MaxDepositLimitReached';
      msg: 'Max Deposit Limit Reached';
    },
    {
      code: 6045;
      name: 'InvalidProcessDepositQueueTime';
      msg: 'Invalid Process Deposit Queue Time';
    },
    {
      code: 6046;
      name: 'InvalidProcessWithdrawQueueTime';
      msg: 'Invalid Process Withdraw Queue Time';
    },
    {
      code: 6047;
      name: 'CannotFindMinValueInKnockIn';
      msg: 'Cannot Find Min Value in KnockIn';
    },
    {
      code: 6048;
      name: 'InvalidTimeToProcessTrade';
      msg: 'Invalid time to process trade';
    },
    {
      code: 6049;
      name: 'DifferentMapleAccount';
      msg: 'Different maple address';
    },
    {
      code: 6050;
      name: 'InvalidTraderTokenAccount';
      msg: 'Invalid trader token address';
    },
    {
      code: 6051;
      name: 'CannotCollectFeesDuringDepositPeriod';
      msg: 'Cannot collect fees during deposit period';
    },
    {
      code: 6052;
      name: 'PythError';
      msg: 'Issue with Pyth';
    },
    {
      code: 6053;
      name: 'PythPriceInvalid';
      msg: 'Pyth price is invalid';
    },
    {
      code: 6054;
      name: 'InvalidOracleType';
      msg: 'Invalid oracle type';
    },
    {
      code: 6055;
      name: 'SwitchboardError';
      msg: 'Issue with Price from Switchboard';
    },
    {
      code: 6056;
      name: 'SwitchboardNegativeValueError';
      msg: 'Switchboard value is negative';
    },
    {
      code: 6057;
      name: 'SwitchboardPriceInvalid';
      msg: 'Switchboard price is invalid';
    },
    {
      code: 6058;
      name: 'PriceError';
      msg: 'Switchboard price is invalid';
    },
    {
      code: 6059;
      name: 'CannotCollectFeesYet';
      msg: 'Cannot collect fees before payoff calculated';
    },
    {
      code: 6060;
      name: 'TradeNotProcessedYet';
      msg: 'Trade not processed yet';
    },
    {
      code: 6061;
      name: 'FeesNotCollectedYet';
      msg: 'Must collect fees before rollover';
    },
    {
      code: 6062;
      name: 'MaxDepositLimitOnProduct';
      msg: 'Reached max deposit limit on product';
    },
    {
      code: 6063;
      name: 'LoadAccountDiscriminatorAlreadySet';
      msg: 'Load account discriminator already set';
    },
    {
      code: 6064;
      name: 'IncorrectRemainingAccountsForCalculateVaultPayoff';
      msg: 'Incorrect remaining accounts for calculate vault payoff';
    },
    {
      code: 6065;
      name: 'IncorrectRemainingAccountsForCalculationAgent';
      msg: 'Incorrect remaining accounts for calculation agent';
    },
    {
      code: 6066;
      name: 'CannotCalculatePayoff';
      msg: 'Cannot calculate payoff before vault epoch end or K.O.';
    },
    {
      code: 6067;
      name: 'CannotRunCalculationAgentBeforeTradeProcessed';
      msg: 'Cannot run calculation agent before trade processed';
    },
    {
      code: 6068;
      name: 'CollectFeesBeforeProcessWithdraw';
      msg: 'Must collect fees before processing withdraw queue';
    },
    {
      code: 6069;
      name: 'ProcessWithdrawQueueBeforeRollover';
      msg: 'Must process withdraw queue before rollover';
    },
    {
      code: 6070;
      name: 'PayoffAlreadyCalculated';
      msg: 'Vault payoff already calculated';
    },
    {
      code: 6071;
      name: 'FeesAlreadyCollected';
      msg: 'Fees already collected';
    },
    {
      code: 6072;
      name: 'WithdrawQueueAlreadyProcessedForThisEpoch';
      msg: 'Withdraw queue already processed for this epoch';
    },
    {
      code: 6073;
      name: 'TradeAlreadyProcessed';
      msg: 'Trade already processed';
    },
    {
      code: 6074;
      name: 'CannotTradeMoreThanVaultUnderlyingAmount';
      msg: 'Cannot trade more than vault underlying amount';
    },
    {
      code: 6075;
      name: 'InvalidVaultStatus';
      msg: 'Invalid vault status';
    },
    {
      code: 6076;
      name: 'OptionBarrierDoesNotExist';
      msg: 'Option barrier does not exist';
    },
    {
      code: 6077;
      name: 'InvalidObservationPeriodForCalculationAgent';
      msg: 'Invalid observation period for calculation agent';
    },
    {
      code: 6078;
      name: 'IncorrectOptionBarrierKey';
      msg: 'Incorrect option barrier key';
    },
    {
      code: 6079;
      name: 'IncorrectOracleKey';
      msg: 'Incorrect oracle key';
    },
    {
      code: 6080;
      name: 'InvalidProgramAdmin';
      msg: 'Invalid program admin';
    },
    {
      code: 6081;
      name: 'InvalidProductUnderlyingTokenAddress';
      msg: 'Invalid product underlying token address';
    },
    {
      code: 6082;
      name: 'UnavailableOptionPrice';
      msg: 'Unvailable option price';
    },
    {
      code: 6083;
      name: 'ObservationPeriodInThePast';
      msg: 'Observation period is in the past';
    },
    {
      code: 6084;
      name: 'ProductUnderlyingTokenAccountMismatch';
      msg: 'Mismatch product underlying token account';
    },
    {
      code: 6085;
      name: 'RecieverTokenAccountMismatch';
      msg: 'Reciever token account mismatch';
    },
    {
      code: 6086;
      name: 'ShouldBeZombieVault';
      msg: 'Invalid Zombie Vault';
    },
    {
      code: 6087;
      name: 'ProductInactive';
      msg: 'Product is inactive';
    },
    {
      code: 6088;
      name: 'WithdrawalQueueNotEmpty';
      msg: 'Withdrawal queue not empty';
    },
  ];
};

export const IDL: CegaVault = {
  version: '0.1.0',
  name: 'cega_vault',
  instructions: [
    {
      name: 'initializeState',
      accounts: [
        {
          name: 'state',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'productAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'feeRecipient',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'programAdmin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'admin',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'InitializeStateArgs',
          },
        },
      ],
    },
    {
      name: 'updateAdmin',
      accounts: [
        {
          name: 'state',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'programAdmin',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'nextAdmin',
          type: 'publicKey',
        },
      ],
    },
    {
      name: 'acceptAdminUpdate',
      accounts: [
        {
          name: 'state',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'newAdmin',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: 'updateFeeRecipient',
      accounts: [
        {
          name: 'state',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'programAdmin',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'newFeeRecipient',
          type: 'publicKey',
        },
      ],
    },
    {
      name: 'updateTraderAdmin',
      accounts: [
        {
          name: 'state',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'programAdmin',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'newTraderAdmin',
          type: 'publicKey',
        },
      ],
    },
    {
      name: 'updateMapleAccount',
      accounts: [
        {
          name: 'state',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'programAdmin',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'newMapleAccount',
          type: 'publicKey',
        },
      ],
    },
    {
      name: 'updateFees',
      accounts: [
        {
          name: 'state',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'UpdateFeesArgs',
          },
        },
      ],
    },
    {
      name: 'fundProductAuthority',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'productAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'initializeProduct',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'productAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'productUnderlyingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depositQueueHeader',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mapleAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'InitializeProductArgs',
          },
        },
      ],
    },
    {
      name: 'initializeVault',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'traderAdmin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'productAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'redeemableMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'optionMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'productUnderlyingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultOptionTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultWithdrawQueueRedeemableTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'withdrawQueueHeader',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'structuredProductInfoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'InitializeVaultArgs',
          },
        },
      ],
    },
    {
      name: 'initializeStructuredProduct',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'traderAdmin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'structuredProductInfoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'InitializeStructuredProductArgs',
          },
        },
      ],
    },
    {
      name: 'initializeOptionBarrier',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'traderAdmin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'optionBarrier',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'oracle',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'InitializeOptionBarrierArgs',
          },
        },
      ],
    },
    {
      name: 'initializeProgramUsdcAccount',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'traderAdmin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'productAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'programUsdcTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'updateOptionBarrierDetails',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'vault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'optionBarrier',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'oracle',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'UpdateOptionBarrierDetailsArgs',
          },
        },
      ],
    },
    {
      name: 'updateVaultEpochTimes',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'traderAdmin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'UpdateVaultEpochTimesArgs',
          },
        },
      ],
    },
    {
      name: 'updateMaxDepositLimit',
      accounts: [
        {
          name: 'state',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'traderAdmin',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'newDepositLimit',
          type: 'u64',
        },
      ],
    },
    {
      name: 'updateProductFees',
      accounts: [
        {
          name: 'state',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'newManagementFeePercentage',
          type: 'u64',
        },
      ],
    },
    {
      name: 'updateApr',
      accounts: [
        {
          name: 'state',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'traderAdmin',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'structuredProductInfoAccount',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'newApr',
          type: 'u64',
        },
      ],
    },
    {
      name: 'updateTenorInDays',
      accounts: [
        {
          name: 'state',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'structuredProductInfoAccount',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'newTenorInDays',
          type: 'u64',
        },
      ],
    },
    {
      name: 'setProductDepositQueue',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'productAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depositQueueHeader',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'setProductState',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'productAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'SetProductStateArgs',
          },
        },
      ],
    },
    {
      name: 'depositVault',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'productAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userAuthority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depositInfo',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'redeemableMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'productUnderlyingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userUnderlyingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userRedeemableTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'DepositVaultArgs',
          },
        },
      ],
    },
    {
      name: 'addToDepositQueue',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'productAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userAuthority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'productUnderlyingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userUnderlyingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depositQueueHeader',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'newQueueNode',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'AddToDepositQueueArgs',
          },
        },
      ],
    },
    {
      name: 'processDepositQueue',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'traderAdmin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'productAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'underlyingMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'redeemableMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'productUnderlyingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depositQueueHeader',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'withdrawVault',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userAuthority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userUnderlyingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userRedeemableTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'redeemableMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'productUnderlyingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultWithdrawQueueRedeemableTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'withdrawQueueHeader',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'newQueueNode',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'WithdrawVaultArgs',
          },
        },
      ],
    },
    {
      name: 'processWithdrawQueue',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'traderAdmin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'productAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'underlyingMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'redeemableMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'productUnderlyingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultWithdrawQueueRedeemableTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'withdrawQueueHeader',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'transferToProgramUnderlyingTokenAccount',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'traderAdmin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'productAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'productUnderlyingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'programUsdcTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'redeemableMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'sendFundsToMarketMakers',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'traderAdmin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'productAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'programUsdcTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'recieverWalletAddress',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'recieverUnderlyingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountToSend',
          type: 'u64',
        },
      ],
    },
    {
      name: 'transferToProductUnderlyingTokenAccount',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'traderAdmin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'productAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'productUnderlyingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'programUsdcTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountToTrade',
          type: 'u64',
        },
      ],
    },
    {
      name: 'transferToCega',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userAuthority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'productAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userUnderlyingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'programUsdcTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'TransferToCegaArgs',
          },
        },
      ],
    },
    {
      name: 'collectFees',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'traderAdmin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'productAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'productUnderlyingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'feeRecipientTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'calculateCurrentYield',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'product',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'structuredProductInfoAccount',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'calculateVaultPayoff',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'productAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'structuredProductInfoAccount',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'calculationAgent',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'structuredProductInfoAccount',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'rolloverVault',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'traderAdmin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'overrideObservationPeriod',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'traderAdmin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'optionBarrier',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'OverrideObservationPeriodArgs',
          },
        },
      ],
    },
    {
      name: 'overrideVaultBarriers',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'OverrideVaultBarriersArgs',
          },
        },
      ],
    },
    {
      name: 'overrideOptionBarrierPrice',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'optionBarrier',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'price',
          type: 'u128',
        },
      ],
    },
    {
      name: 'setOptionBarrierAbs',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'traderAdmin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'optionBarrier',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'SetOptionBarrierAbsArgs',
          },
        },
      ],
    },
    {
      name: 'transferBetweenProducts',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'productAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'productFrom',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'productFromUnderlyingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'productDestination',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'productDestinationUnderlyingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'overrideVaultStatus',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'updatedStatus',
          type: 'u64',
        },
      ],
    },
    {
      name: 'rollbackKnockOutEvent',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'createTokenMetadata',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'productAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'redeemableMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'CreateTokenMetadataArgs',
          },
        },
      ],
    },
    {
      name: 'updateTokenMetadata',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'productAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'redeemableMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'CreateTokenMetadataArgs',
          },
        },
      ],
    },
    {
      name: 'updateUnderlyingAmount',
      accounts: [
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'productAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'underlyingMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'product',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'productUnderlyingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'programUsdcTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'state',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'stateNonce',
            type: 'u8',
          },
          {
            name: 'productAuthorityNonce',
            type: 'u8',
          },
          {
            name: 'programAdmin',
            type: 'publicKey',
          },
          {
            name: 'admin',
            type: 'publicKey',
          },
          {
            name: 'nextAdmin',
            type: 'publicKey',
          },
          {
            name: 'yieldFeePercentage',
            type: 'u32',
          },
          {
            name: 'managementFeePercentage',
            type: 'u32',
          },
          {
            name: 'feeRecipient',
            type: 'publicKey',
          },
          {
            name: 'traderAdmin',
            type: 'publicKey',
          },
          {
            name: 'programUsdcTokenAccount',
            type: 'publicKey',
          },
          {
            name: 'extraBoolOne',
            type: 'bool',
          },
          {
            name: 'extraBoolTwo',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'product',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'productName',
            type: {
              array: ['u8', 32],
            },
          },
          {
            name: 'productNonce',
            type: 'u8',
          },
          {
            name: 'productUnderlyingTokenAccountNonce',
            type: 'u8',
          },
          {
            name: 'productCounter',
            type: 'u64',
          },
          {
            name: 'underlyingMint',
            type: 'publicKey',
          },
          {
            name: 'productUnderlyingTokenAccount',
            type: 'publicKey',
          },
          {
            name: 'maxDepositLimit',
            type: 'u64',
          },
          {
            name: 'underlyingAmount',
            type: 'u64',
          },
          {
            name: 'mapleAccount',
            type: 'publicKey',
          },
          {
            name: 'depositQueueHeaderNonce',
            type: 'u8',
          },
          {
            name: 'depositQueueHeader',
            type: 'publicKey',
          },
          {
            name: 'isActive',
            type: 'bool',
          },
          {
            name: 'managementFeePercentage',
            type: 'u64',
          },
          {
            name: 'extraPubkeyOne',
            type: 'publicKey',
          },
          {
            name: 'extraPubkeyTwo',
            type: 'publicKey',
          },
          {
            name: 'extraUint64Two',
            type: 'u64',
          },
          {
            name: 'extraUint64Three',
            type: 'u64',
          },
          {
            name: 'extraBoolOne',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'depositInfo',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'depositInfoNonce',
            type: 'u8',
          },
          {
            name: 'userKey',
            type: 'publicKey',
          },
          {
            name: 'product',
            type: 'publicKey',
          },
          {
            name: 'vault',
            type: 'publicKey',
          },
          {
            name: 'usdcDeposit',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'vault',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'productName',
            type: {
              array: ['u8', 32],
            },
          },
          {
            name: 'vaultNumber',
            type: 'u64',
          },
          {
            name: 'status',
            type: {
              defined: 'VaultStatus',
            },
          },
          {
            name: 'vaultNonce',
            type: 'u8',
          },
          {
            name: 'redeemableMintNonce',
            type: 'u8',
          },
          {
            name: 'optionMintNonce',
            type: 'u8',
          },
          {
            name: 'vaultUnderlyingTokenAccountNonce',
            type: 'u8',
          },
          {
            name: 'vaultOptionTokenAccountNonce',
            type: 'u8',
          },
          {
            name: 'vaultWithdrawQueueRedeemableTokenAccountNonce',
            type: 'u8',
          },
          {
            name: 'withdrawQueueHeaderNonce',
            type: 'u8',
          },
          {
            name: 'structuredProductInfoAccountNonce',
            type: 'u8',
          },
          {
            name: 'underlyingMint',
            type: 'publicKey',
          },
          {
            name: 'redeemableMint',
            type: 'publicKey',
          },
          {
            name: 'optionMint',
            type: 'publicKey',
          },
          {
            name: 'vaultUnderlyingTokenAccount',
            type: 'publicKey',
          },
          {
            name: 'vaultOptionTokenAccount',
            type: 'publicKey',
          },
          {
            name: 'vaultWithdrawQueueRedeemableTokenAccount',
            type: 'publicKey',
          },
          {
            name: 'underlyingAmount',
            type: 'u64',
          },
          {
            name: 'vaultTotalCouponPayoff',
            type: 'u64',
          },
          {
            name: 'knockInEvent',
            type: 'bool',
          },
          {
            name: 'knockOutEvent',
            type: 'bool',
          },
          {
            name: 'vaultFinalPayoff',
            type: 'u64',
          },
          {
            name: 'epochSequenceNumber',
            type: 'u64',
          },
          {
            name: 'startEpoch',
            type: 'u64',
          },
          {
            name: 'endEpoch',
            type: 'u64',
          },
          {
            name: 'epochCadence',
            type: 'u32',
          },
          {
            name: 'startDeposits',
            type: 'u64',
          },
          {
            name: 'endDeposits',
            type: 'u64',
          },
          {
            name: 'tradeDate',
            type: 'u64',
          },
          {
            name: 'withdrawQueueHeader',
            type: 'publicKey',
          },
          {
            name: 'structuredProductInfoAccount',
            type: 'publicKey',
          },
          {
            name: 'extraPubkeyOne',
            type: 'publicKey',
          },
          {
            name: 'extraPubkeyTwo',
            type: 'publicKey',
          },
          {
            name: 'extraPubkeyThree',
            type: 'publicKey',
          },
          {
            name: 'extraUint64One',
            type: 'u64',
          },
          {
            name: 'extraUint64Two',
            type: 'u64',
          },
          {
            name: 'extraUint64Three',
            type: 'u64',
          },
          {
            name: 'extraBoolOne',
            type: 'bool',
          },
          {
            name: 'extraBoolTwo',
            type: 'bool',
          },
          {
            name: 'extraBoolThree',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'structuredProductInfoAccount',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'structuredProductInfoAccountNonce',
            type: 'u8',
          },
          {
            name: 'epochSequenceNumber',
            type: 'u64',
          },
          {
            name: 'numberOfPuts',
            type: 'u64',
          },
          {
            name: 'putOne',
            type: 'publicKey',
          },
          {
            name: 'putTwo',
            type: 'publicKey',
          },
          {
            name: 'putThree',
            type: 'publicKey',
          },
          {
            name: 'putFour',
            type: 'publicKey',
          },
          {
            name: 'putFive',
            type: 'publicKey',
          },
          {
            name: 'aprPercentage',
            type: 'u64',
          },
          {
            name: 'tenorInDays',
            type: 'u64',
          },
          {
            name: 'daysPassed',
            type: 'u64',
          },
          {
            name: 'extraPubkeyOne',
            type: 'publicKey',
          },
          {
            name: 'extraPubkeyTwo',
            type: 'publicKey',
          },
          {
            name: 'extraPubkeyThree',
            type: 'publicKey',
          },
          {
            name: 'extraUint64One',
            type: 'u64',
          },
          {
            name: 'extraUint64Two',
            type: 'u64',
          },
          {
            name: 'extraUint64Three',
            type: 'u64',
          },
          {
            name: 'extraBoolOne',
            type: 'bool',
          },
          {
            name: 'extraBoolTwo',
            type: 'bool',
          },
          {
            name: 'extraBoolThree',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'optionBarrier',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'optionBarrierNonce',
            type: 'u8',
          },
          {
            name: 'optionExists',
            type: 'bool',
          },
          {
            name: 'assetName',
            type: {
              array: ['u8', 32],
            },
          },
          {
            name: 'optionNumber',
            type: 'u64',
          },
          {
            name: 'assetMint',
            type: 'publicKey',
          },
          {
            name: 'strikeAbs',
            type: {
              option: 'u64',
            },
          },
          {
            name: 'knockInAbs',
            type: {
              option: 'u64',
            },
          },
          {
            name: 'knockOutAbs',
            type: {
              option: 'u64',
            },
          },
          {
            name: 'lastPrice',
            type: {
              option: 'u128',
            },
          },
          {
            name: 'lastPriceTime',
            type: {
              option: 'u64',
            },
          },
          {
            name: 'oracle',
            type: 'publicKey',
          },
          {
            name: 'oracleType',
            type: 'u8',
          },
          {
            name: 'observationTime',
            type: 'u64',
          },
          {
            name: 'timeBuffer',
            type: 'u64',
          },
          {
            name: 'timeIncrement',
            type: 'u64',
          },
          {
            name: 'isOverridePrice',
            type: 'bool',
          },
          {
            name: 'overridePrice',
            type: 'u128',
          },
          {
            name: 'extraPubkeyOne',
            type: 'publicKey',
          },
          {
            name: 'extraPubkeyTwo',
            type: 'publicKey',
          },
          {
            name: 'extraPubkeyThree',
            type: 'publicKey',
          },
          {
            name: 'extraUint64One',
            type: 'u64',
          },
          {
            name: 'extraUint64Two',
            type: 'u64',
          },
          {
            name: 'extraUint64Three',
            type: 'u64',
          },
          {
            name: 'extraBoolOne',
            type: 'bool',
          },
          {
            name: 'extraBoolTwo',
            type: 'bool',
          },
          {
            name: 'extraBoolThree',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'queueHeader',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'count',
            type: 'u64',
          },
          {
            name: 'seqNum',
            type: 'u64',
          },
          {
            name: 'head',
            type: 'publicKey',
          },
          {
            name: 'tail',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'queueNode',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'amount',
            type: 'u64',
          },
          {
            name: 'nextNode',
            type: 'publicKey',
          },
          {
            name: 'userKey',
            type: 'publicKey',
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'FeeRecipient',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'recipient',
            type: 'publicKey',
          },
          {
            name: 'percentage',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'InitializeStateArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'productAuthorityNonce',
            type: 'u8',
          },
          {
            name: 'yieldFeePercentage',
            type: 'u32',
          },
          {
            name: 'managementFeePercentage',
            type: 'u32',
          },
        ],
      },
    },
    {
      name: 'UpdateFeesArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'yieldFeePercentage',
            type: 'u32',
          },
          {
            name: 'managementFeePercentage',
            type: 'u32',
          },
        ],
      },
    },
    {
      name: 'UpdateVaultEpochTimesArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'startEpoch',
            type: 'u64',
          },
          {
            name: 'endEpoch',
            type: 'u64',
          },
          {
            name: 'startDeposits',
            type: 'u64',
          },
          {
            name: 'endDeposits',
            type: 'u64',
          },
          {
            name: 'epochCadence',
            type: 'u32',
          },
        ],
      },
    },
    {
      name: 'OverrideObservationPeriodArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'observationTime',
            type: {
              option: 'u64',
            },
          },
          {
            name: 'timeBuffer',
            type: {
              option: 'u64',
            },
          },
          {
            name: 'timeIncrement',
            type: {
              option: 'u64',
            },
          },
        ],
      },
    },
    {
      name: 'InitializeProductArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'productName',
            type: 'string',
          },
          {
            name: 'maxDepositLimit',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'InitializeVaultArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'epochSequenceNumber',
            type: 'u64',
          },
          {
            name: 'startEpoch',
            type: 'u64',
          },
          {
            name: 'endEpoch',
            type: 'u64',
          },
          {
            name: 'epochCadence',
            type: 'u32',
          },
          {
            name: 'startDeposits',
            type: 'u64',
          },
          {
            name: 'endDeposits',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'SetProductStateArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'newProductState',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'InitializeOptionBarrierArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'assetName',
            type: 'string',
          },
          {
            name: 'optionNumber',
            type: 'u64',
          },
          {
            name: 'strikePercentage',
            type: 'u64',
          },
          {
            name: 'knockInPercentage',
            type: 'u64',
          },
          {
            name: 'knockOutPercentage',
            type: 'u64',
          },
          {
            name: 'oracleType',
            type: 'u8',
          },
          {
            name: 'observationTime',
            type: 'u64',
          },
          {
            name: 'timeBuffer',
            type: 'u64',
          },
          {
            name: 'timeIncrement',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'UpdateOptionBarrierDetailsArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'assetName',
            type: 'string',
          },
          {
            name: 'oracleType',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'InitializeStructuredProductArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'aprPercentage',
            type: 'u64',
          },
          {
            name: 'tenorInDays',
            type: 'u64',
          },
          {
            name: 'numberOfPuts',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'DepositVaultArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'underlyingAmount',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'AddToDepositQueueArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'depositAmount',
            type: 'u64',
          },
          {
            name: 'newDepositQueueNodeNonce',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'TransferToCegaArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'transferAmount',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'WithdrawVaultArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'redeemableAmount',
            type: 'u64',
          },
          {
            name: 'newWithdrawQueueNodeNonce',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'SendFundsToMarketMakersArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'recieverAddress',
            type: 'publicKey',
          },
          {
            name: 'amountToSend',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'OverrideVaultBarriersArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'knockIn',
            type: 'bool',
          },
          {
            name: 'knockOut',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'SetOptionBarrierAbsArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'strike',
            type: {
              option: 'u64',
            },
          },
          {
            name: 'knockIn',
            type: {
              option: 'u64',
            },
          },
          {
            name: 'knockOut',
            type: {
              option: 'u64',
            },
          },
        ],
      },
    },
    {
      name: 'CreateTokenMetadataArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'symbol',
            type: 'string',
          },
          {
            name: 'uri',
            type: 'string',
          },
        ],
      },
    },
    {
      name: 'VaultStatus',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'NotTraded',
          },
          {
            name: 'Traded',
          },
          {
            name: 'EpochEnded',
          },
          {
            name: 'PayoffCalculated',
          },
          {
            name: 'FeesCollected',
          },
          {
            name: 'ProcessingWithdrawQueue',
          },
          {
            name: 'WithdrawQueueProcessed',
          },
          {
            name: 'Zombie',
          },
          {
            name: 'ProcessingDepositQueue',
          },
          {
            name: 'DepositQueueProcessed',
          },
        ],
      },
    },
    {
      name: 'OracleType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Nil',
          },
          {
            name: 'Pyth',
          },
          {
            name: 'Switchboard',
          },
        ],
      },
    },
  ],
  events: [
    {
      name: 'DepositEvent',
      fields: [
        {
          name: 'user',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'vault',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'amount',
          type: 'u64',
          index: false,
        },
        {
          name: 'redeemableMinted',
          type: 'u64',
          index: false,
        },
        {
          name: 'timestamp',
          type: 'u64',
          index: false,
        },
        {
          name: 'slot',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'WithdrawalEvent',
      fields: [
        {
          name: 'user',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'vault',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'redeemableBurnt',
          type: 'u64',
          index: false,
        },
        {
          name: 'underlyingReceived',
          type: 'u64',
          index: false,
        },
        {
          name: 'timestamp',
          type: 'u64',
          index: false,
        },
        {
          name: 'slot',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'KnockOutEvent',
      fields: [
        {
          name: 'vault',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'asset',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'spot',
          type: 'u64',
          index: false,
        },
        {
          name: 'timestamp',
          type: 'u64',
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'InvalidUsdMint',
      msg: 'Invalid USD mint',
    },
    {
      code: 6001,
      name: 'InvalidMarketMakerAddress',
      msg: 'Invalid market maker address',
    },
    {
      code: 6002,
      name: 'VaultFuture',
      msg: 'Epoch must start in the future',
    },
    {
      code: 6003,
      name: 'SeqTimes',
      msg: 'Epoch times are non-sequential',
    },
    {
      code: 6004,
      name: 'StartEpochTime',
      msg: 'Epoch has not started',
    },
    {
      code: 6005,
      name: 'EndDepositsTime',
      msg: 'Deposits period has ended',
    },
    {
      code: 6006,
      name: 'EndEpochTime',
      msg: 'Epoch has ended',
    },
    {
      code: 6007,
      name: 'EpochNotOver',
      msg: 'Epoch has not finished yet',
    },
    {
      code: 6008,
      name: 'InsufficientUnderlyingTokens',
      msg: 'Insufficient underlying tokens',
    },
    {
      code: 6009,
      name: 'InsufficientRedeemableTokens',
      msg: 'Insufficient redeemable tokens',
    },
    {
      code: 6010,
      name: 'InvalidDepositTime',
      msg: 'Invalid deposit time',
    },
    {
      code: 6011,
      name: 'UnderlyingNotEqRedeem',
      msg: "Underlying total and redeemable total don't match",
    },
    {
      code: 6012,
      name: 'InvalidUnderlyingMint',
      msg: 'Invalid underlying mint',
    },
    {
      code: 6013,
      name: 'InvalidUserUnderlyingAccountOwner',
      msg: 'Invalid user underlying account owner',
    },
    {
      code: 6014,
      name: 'InvalidVaultAdmin',
      msg: 'Invalid vault admin',
    },
    {
      code: 6015,
      name: 'InvalidTraderAdmin',
      msg: 'Invalid trader admin',
    },
    {
      code: 6016,
      name: 'InvalidUserRedeemableOwner',
      msg: 'Invalid user redeemable owner',
    },
    {
      code: 6017,
      name: 'InvalidUserRedeemableMint',
      msg: 'Invalid user redeemable mint',
    },
    {
      code: 6018,
      name: 'InvalidFeeRecipients',
      msg: 'Invalid fee recipients',
    },
    {
      code: 6019,
      name: 'FeeRecipientOwnerMismatch',
      msg: 'Fee recipient owner mismatch',
    },
    {
      code: 6020,
      name: 'FeeRecipientTokenMintMismatch',
      msg: 'Fee recipient token mint mismatch',
    },
    {
      code: 6021,
      name: 'InvalidOptionMint',
      msg: 'Invalid option mint',
    },
    {
      code: 6022,
      name: 'MintNotCreatedForThisEpoch',
      msg: 'Mint not yet initialized for this epoch',
    },
    {
      code: 6023,
      name: 'DepositExceedsDepositLimit',
      msg: 'Deposit exceeds deposit limit',
    },
    {
      code: 6024,
      name: 'AccountDidNotSerialize',
      msg: 'Failed to serialize the account',
    },
    {
      code: 6025,
      name: 'DepositQueueNotEmpty',
      msg: 'Deposit queue not empty',
    },
    {
      code: 6026,
      name: 'IncorrectRemainingAccountsForInsertQueue',
      msg: 'Incorrect remaining accounts passed in for insert queue',
    },
    {
      code: 6027,
      name: 'QueueTailNotMutable',
      msg: 'Queue tail not mutable',
    },
    {
      code: 6028,
      name: 'EmptyQueue',
      msg: 'Cannot remove node from empty queue',
    },
    {
      code: 6029,
      name: 'NodeIsNotTail',
      msg: 'Node passed in is not the tail',
    },
    {
      code: 6030,
      name: 'TooManyRemainingAccountsForRemoveQueueNode',
      msg: 'Too many remaining accounts to remove queued node',
    },
    {
      code: 6031,
      name: 'PrevNodeRequiredForRemoveQueueNode',
      msg: 'Removing this queue node requires the previous node',
    },
    {
      code: 6032,
      name: 'UserNotMatchingQueueNode',
      msg: 'User does not match the queue node to be processed',
    },
    {
      code: 6033,
      name: 'MustBeKnockOut',
      msg: "Vault must be KO'd to override",
    },
    {
      code: 6034,
      name: 'WithdrawQueueMustBeEmpty',
      msg: 'Withdrawal queue must be empty to process deposit queue',
    },
    {
      code: 6035,
      name: 'IncorrectRemainingAccountsForProcessQueue',
      msg: 'Incorrect number of remaining accounts to process queue',
    },
    {
      code: 6036,
      name: 'IncorrectQueueNodeForProcessQueue',
      msg: 'Queue node to process does not match the queueheader head',
    },
    {
      code: 6037,
      name: 'IncorrectUserAuthorityForTokenAccount',
      msg: 'User does not match the owner of the token account',
    },
    {
      code: 6038,
      name: 'PushRequiresPrevNodeIfNotEmpty',
      msg: 'Push requires prev node if not empty',
    },
    {
      code: 6039,
      name: 'CannotBurnZeroOptions',
      msg: 'Cannot burn zero options',
    },
    {
      code: 6040,
      name: 'CannotExerciseZeroOptions',
      msg: 'Cannot exercise zero options',
    },
    {
      code: 6041,
      name: 'CannotWithdrawZeroAmount',
      msg: 'Cannot withdraw zero amount',
    },
    {
      code: 6042,
      name: 'CannotOverrideEpochTimesWhileOptionExists',
      msg: 'Cannot override epoch times while option exists',
    },
    {
      code: 6043,
      name: 'CannotInitializeOptionUntilAfterDepositEnd',
      msg: 'Cannot initialize option until after deposit end',
    },
    {
      code: 6044,
      name: 'MaxDepositLimitReached',
      msg: 'Max Deposit Limit Reached',
    },
    {
      code: 6045,
      name: 'InvalidProcessDepositQueueTime',
      msg: 'Invalid Process Deposit Queue Time',
    },
    {
      code: 6046,
      name: 'InvalidProcessWithdrawQueueTime',
      msg: 'Invalid Process Withdraw Queue Time',
    },
    {
      code: 6047,
      name: 'CannotFindMinValueInKnockIn',
      msg: 'Cannot Find Min Value in KnockIn',
    },
    {
      code: 6048,
      name: 'InvalidTimeToProcessTrade',
      msg: 'Invalid time to process trade',
    },
    {
      code: 6049,
      name: 'DifferentMapleAccount',
      msg: 'Different maple address',
    },
    {
      code: 6050,
      name: 'InvalidTraderTokenAccount',
      msg: 'Invalid trader token address',
    },
    {
      code: 6051,
      name: 'CannotCollectFeesDuringDepositPeriod',
      msg: 'Cannot collect fees during deposit period',
    },
    {
      code: 6052,
      name: 'PythError',
      msg: 'Issue with Pyth',
    },
    {
      code: 6053,
      name: 'PythPriceInvalid',
      msg: 'Pyth price is invalid',
    },
    {
      code: 6054,
      name: 'InvalidOracleType',
      msg: 'Invalid oracle type',
    },
    {
      code: 6055,
      name: 'SwitchboardError',
      msg: 'Issue with Price from Switchboard',
    },
    {
      code: 6056,
      name: 'SwitchboardNegativeValueError',
      msg: 'Switchboard value is negative',
    },
    {
      code: 6057,
      name: 'SwitchboardPriceInvalid',
      msg: 'Switchboard price is invalid',
    },
    {
      code: 6058,
      name: 'PriceError',
      msg: 'Switchboard price is invalid',
    },
    {
      code: 6059,
      name: 'CannotCollectFeesYet',
      msg: 'Cannot collect fees before payoff calculated',
    },
    {
      code: 6060,
      name: 'TradeNotProcessedYet',
      msg: 'Trade not processed yet',
    },
    {
      code: 6061,
      name: 'FeesNotCollectedYet',
      msg: 'Must collect fees before rollover',
    },
    {
      code: 6062,
      name: 'MaxDepositLimitOnProduct',
      msg: 'Reached max deposit limit on product',
    },
    {
      code: 6063,
      name: 'LoadAccountDiscriminatorAlreadySet',
      msg: 'Load account discriminator already set',
    },
    {
      code: 6064,
      name: 'IncorrectRemainingAccountsForCalculateVaultPayoff',
      msg: 'Incorrect remaining accounts for calculate vault payoff',
    },
    {
      code: 6065,
      name: 'IncorrectRemainingAccountsForCalculationAgent',
      msg: 'Incorrect remaining accounts for calculation agent',
    },
    {
      code: 6066,
      name: 'CannotCalculatePayoff',
      msg: 'Cannot calculate payoff before vault epoch end or K.O.',
    },
    {
      code: 6067,
      name: 'CannotRunCalculationAgentBeforeTradeProcessed',
      msg: 'Cannot run calculation agent before trade processed',
    },
    {
      code: 6068,
      name: 'CollectFeesBeforeProcessWithdraw',
      msg: 'Must collect fees before processing withdraw queue',
    },
    {
      code: 6069,
      name: 'ProcessWithdrawQueueBeforeRollover',
      msg: 'Must process withdraw queue before rollover',
    },
    {
      code: 6070,
      name: 'PayoffAlreadyCalculated',
      msg: 'Vault payoff already calculated',
    },
    {
      code: 6071,
      name: 'FeesAlreadyCollected',
      msg: 'Fees already collected',
    },
    {
      code: 6072,
      name: 'WithdrawQueueAlreadyProcessedForThisEpoch',
      msg: 'Withdraw queue already processed for this epoch',
    },
    {
      code: 6073,
      name: 'TradeAlreadyProcessed',
      msg: 'Trade already processed',
    },
    {
      code: 6074,
      name: 'CannotTradeMoreThanVaultUnderlyingAmount',
      msg: 'Cannot trade more than vault underlying amount',
    },
    {
      code: 6075,
      name: 'InvalidVaultStatus',
      msg: 'Invalid vault status',
    },
    {
      code: 6076,
      name: 'OptionBarrierDoesNotExist',
      msg: 'Option barrier does not exist',
    },
    {
      code: 6077,
      name: 'InvalidObservationPeriodForCalculationAgent',
      msg: 'Invalid observation period for calculation agent',
    },
    {
      code: 6078,
      name: 'IncorrectOptionBarrierKey',
      msg: 'Incorrect option barrier key',
    },
    {
      code: 6079,
      name: 'IncorrectOracleKey',
      msg: 'Incorrect oracle key',
    },
    {
      code: 6080,
      name: 'InvalidProgramAdmin',
      msg: 'Invalid program admin',
    },
    {
      code: 6081,
      name: 'InvalidProductUnderlyingTokenAddress',
      msg: 'Invalid product underlying token address',
    },
    {
      code: 6082,
      name: 'UnavailableOptionPrice',
      msg: 'Unvailable option price',
    },
    {
      code: 6083,
      name: 'ObservationPeriodInThePast',
      msg: 'Observation period is in the past',
    },
    {
      code: 6084,
      name: 'ProductUnderlyingTokenAccountMismatch',
      msg: 'Mismatch product underlying token account',
    },
    {
      code: 6085,
      name: 'RecieverTokenAccountMismatch',
      msg: 'Reciever token account mismatch',
    },
    {
      code: 6086,
      name: 'ShouldBeZombieVault',
      msg: 'Invalid Zombie Vault',
    },
    {
      code: 6087,
      name: 'ProductInactive',
      msg: 'Product is inactive',
    },
    {
      code: 6088,
      name: 'WithdrawalQueueNotEmpty',
      msg: 'Withdrawal queue not empty',
    },
  ],
};
