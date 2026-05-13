const { ethers, upgrades } = require("hardhat");

async function main() {

    const proxyAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

    const Broken = await ethers.getContractFactory("CounterBroken");

    const upgraded = await upgrades.upgradeProxy(
        proxyAddress,
        Broken
    );

    console.log(
        "Count:",
        await upgraded.count()
    );

    console.log(
        "Owner:",
        await upgraded.owner()
    );
}

main();