const { ethers } = require("hardhat");

async function main() {

    const proxyAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

    const Counter = await ethers.getContractFactory("CounterV1");

    const counter = await Counter.attach(proxyAddress);

    // Read current value
    const current = await counter.count();

    console.log("Current Count:", current.toString());

    // Increment
    const tx = await counter.increment();

    await tx.wait();

    console.log("Incremented");

    // Read updated value
    const updated = await counter.count();

    console.log("Updated Count:", updated.toString());
}

main();