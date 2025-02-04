import type { Config } from "@nickstracke/ponder-core";

export const config: Config = {
  networks: [
    {
      name: "mainnet",
      chainId: 1,
      rpcUrl: process.env.PONDER_RPC_URL_1,
      maxRpcRequestConcurrency: 25,
    },
  ],
  contracts: [
    {
      name: "RocketTokenRETH",
      network: "mainnet",
      abi: "./abis/RocketTokenRETH.json",
      address: "0xae78736cd615f374d3085123a210448e74fc6393",
      startBlock: 13325304,
    },
  ],
};
