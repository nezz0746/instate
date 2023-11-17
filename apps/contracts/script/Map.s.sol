// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script, console2} from "forge-std/Script.sol";
import {BaseScript} from "./Base.s.sol";
import {Map} from "../src/Map.sol";
import {LocationTile} from "../src/LocationTile.sol";
import {RecordTileFactoryConfig} from "../src/RecordTileFactory.sol";
import {NoCheckVerifier} from "../src/verifiers/NoCheckVerifier.sol";

contract MapScript is BaseScript {
    DeployementChain[] internal _deploymentChains;

    function setUp() public {
        forks[DeployementChain.Anvil] = "local";
        forks[DeployementChain.Goerli] = "goerli";
    }

    function deployMapLocal() public setEnvDeploy(Cycle.Local) {
        _deploymentChains.push(DeployementChain.Anvil);

        _deployMap(_deploymentChains);
    }

    function deployMapTestnets() public setEnvDeploy(Cycle.Testnet) {
        _deploymentChains.push(DeployementChain.Goerli);

        _deployMap(_deploymentChains);
    }

    function _deployMap(
        DeployementChain[] memory targetChains
    ) internal broadcastOn(targetChains) {
        _deployERC6551Config();

        (, address sender, ) = vm.readCallers();

        console2.log("Sender: ", sender);
        console2.log("Deploying Map contract");

        NoCheckVerifier verifier = new NoCheckVerifier();

        Map map = new Map(
            RecordTileFactoryConfig(
                address(registry),
                address(accountProxy),
                address(implementation)
            ),
            2,
            6
        );

        address tile = map.createTile(
            address(verifier),
            "https://example.com/"
        );

        _saveImplementations(address(map), "Map");
        _saveImplementations(tile, "LocationTile");
    }
}
