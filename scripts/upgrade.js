const { ethers, upgrades } = require("hardhat");

async function main() {

    const proxyAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

    const CounterV2 = await ethers.getContractFactory("CounterV2");

    const upgraded = await upgrades.upgradeProxy(
        proxyAddress,
        CounterV2
    );

    console.log("Upgraded Successfully");
}

main();