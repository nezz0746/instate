// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {ERC6551Registry} from "erc6551/ERC6551Registry.sol";
import {AccountProxy} from "tokenbound/AccountProxy.sol";
import {Initializable} from "@openzeppelin-upgradeable/proxy/utils/Initializable.sol";

contract ERC6551AccountCreator is Initializable {
    ERC6551Registry internal _registry;
    address internal _implementation;
    address internal _accountProxy;

    function __ERC6551AccountCreator__init(
        address registry,
        address accountProxy,
        address implementation
    ) public initializer {
        _registry = ERC6551Registry(registry);
        _accountProxy = accountProxy;
        _implementation = implementation;
    }

    function _createAccount(
        uint256 chainId,
        address tokenContract,
        uint256 tokenId
    ) internal returns (address accountAddress) {
        accountAddress = _registry.createAccount(
            _accountProxy,
            bytes32(""),
            chainId,
            tokenContract,
            tokenId
        );

        AccountProxy(payable(accountAddress)).initialize(_implementation);
    }

    function _computeAccount(
        uint256 chainId,
        address tokenContract,
        uint256 tokenId
    ) internal view returns (address accountAddress) {
        accountAddress = _registry.account(
            _accountProxy,
            bytes32(""),
            chainId,
            tokenContract,
            tokenId
        );
    }
}
