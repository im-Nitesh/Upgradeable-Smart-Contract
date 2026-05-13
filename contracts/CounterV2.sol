// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "./CounterV1.sol";

contract CounterV2 is CounterV1 {

    function decrement() public {
        count -= 1;
    }
}