const { ethers, upgrades } = require("hardhat");

async function main() {

    const CounterV1 = await ethers.getContractFactory("CounterV1");

    const counter = await upgrades.deployProxy(
        CounterV1,
        [5],
        {
            initializer: "initialize"
        }
    );

    await counter.waitForDeployment();

    console.log("Proxy Address:", await counter.getAddress());
}

main();