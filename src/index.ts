// import { flex as Flex } from "./flex/flex";
// import { FlexClient } from "./flex/client";
// import * as flexUtils from "./flex/flex-utils";
// import * as flexInstructions from "./flex/instructions";
// import * as flexConstants from "./flex/constants";
// import * as flexProgramTypes from "./flex/program-types";
// import * as flexTypes from "./flex/types";

import { Network, CLUSTER_URLS } from './common/network';
import * as types from './common/types';
import * as utils from './common/utils';
import * as constants from './common/constants';
import { EventType } from './common/events';
import { Program } from './common/program';

import { CegaSDK } from './vault/sdk';
import { CegaClient } from './vault/client';
import * as vaultConstants from './vault/constants';
import * as vaultUtils from './vault/utils';
import * as vaultTypes from './vault/types';
import * as vaultInstructions from './vault/instructions';
import * as vaultProgramTypes from './vault/program-types';

// Flex
// export {
//   Flex,
//   FlexClient,
//   flexUtils,
//   flexInstructions,
//   flexConstants,
//   flexProgramTypes,
//   flexTypes,
// };

// Vault
export {
  CegaSDK,
  CegaClient,
  vaultConstants,
  vaultUtils,
  vaultInstructions,
  vaultProgramTypes,
  vaultTypes,
};

// Common
export { Program, constants, types, Network, CLUSTER_URLS, utils, EventType };
