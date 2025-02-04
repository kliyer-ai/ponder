import type { Config } from "@nickstracke/ponder-core";

import RocketTokenRETHAbi from "./abis/RocketTokenRETH.json";

export const config: Config = {
  networks: [
    {
      name: "mainnet",
      chainId: 1,
      rpcUrl: process.env.ANVIL_FORK_URL,
    },
  ],
  contracts: [
    {
      name: "RocketTokenRETH",
      network: "mainnet",
      abi: RocketTokenRETHAbi,
      address: "0xae78736cd615f374d3085123a210448e74fc6393",
      startBlock: 17500000,
      endBlock: 17500010,
    },
  ],
};
