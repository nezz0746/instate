import { defineConfig } from "@wagmi/cli";
import { foundry, react, erc } from "@wagmi/cli/plugins";
import fs from "fs/promises";
import { Address } from "wagmi";

export default defineConfig(async () => {
  const chainIds = (
    await fs.readdir("../../apps/contracts/deployments", "utf-8")
  ).map((chainId) => parseInt(chainId));

  const deployments: Record<string, Record<number, Address>> = {};

  for (const chainId of chainIds) {
    const contractNames = await fs.readdir(
      `../../apps/contracts/deployments/${chainId}`,
      "utf-8"
    );

    for (const contractName of contractNames) {
      const name = contractName.split(".")[0];
      if (!deployments[name]) deployments[name] = {};
      deployments[name][chainId] = await (
        await fs
          .readFile(
            `../../apps/contracts/deployments/${chainId}/${contractName}`,
            "utf-8"
          )
          .then(JSON.parse)
      ).address;
    }
  }

  console.log({ deployments });

  return {
    out: "generated.ts",
    plugins: [
      foundry({
        artifacts: "../../apps/contracts/out",
        include: [
          "Map.sol/*.json",
          "ERC6551Registry.sol/*.json",
          "AccountProxy.sol/*.json",
          "StateTile.sol/*.json",
          "LocalDistributor.sol/*.json",
          "LocalERC721.sol/*.json",
          "AccountV3.sol/*.json",
        ],
        deployments,
      }),
      react({
        usePrepareContractFunctionWrite: true,
        usePrepareContractWrite: true,
      }),
      erc({
        721: true,
      }),
    ],
  };
});
