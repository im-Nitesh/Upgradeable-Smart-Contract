// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract CounterBroken is Initializable {

    address public owner;

    uint256 public count;
    

    function decrement() public {
        count -= 1;
    }
}