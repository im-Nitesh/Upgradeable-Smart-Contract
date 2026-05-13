// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract CounterV1 is Initializable {

    uint256 public count;

    function initialize(uint256 _count) public initializer {
        count = _count;
    }

    function increment() public {
        count += 1;
    }
}