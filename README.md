# 🔄 Upgradeable Smart Contracts Demo

A hands-on project to understand how upgradeable smart contracts work using **OpenZeppelin** and **Hardhat**.

---

## What You'll Learn

- Proxy architecture & `delegatecall`
- Safe upgrades & storage preservation
- Storage corruption (and why it breaks things)
- Upgrade security with OpenZeppelin

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Solidity | Smart contract language |
| Hardhat | Development & testing framework |
| OpenZeppelin Upgrades | Safe upgrade patterns |

---

## Project Structure

```
contracts/
├── CounterV1.sol        # Initial implementation
├── CounterV2.sol        # Upgraded implementation
└── CounterBroken.sol    # Intentionally broken upgrade

scripts/
├── deploy.js            # Deploy proxy + V1
├── upgrade.js           # Upgrade to V2
└── upgradeBroken.js     # Demonstrate storage corruption
```

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Node
```bash
npx hardhat node
```

### 3. Deploy V1
```bash
npx hardhat run scripts/deploy.js --network localhost
```
Deploys the **Proxy**, **Implementation (V1)**, and **Proxy Admin**.

### 4. Upgrade to V2
```bash
npx hardhat run scripts/upgrade.js --network localhost
```
Upgrades logic, preserves storage, adds new functionality safely.

### 5. Run Broken Upgrade (Optional Experiment)
```bash
npx hardhat run scripts/upgradeBroken.js --network localhost
```
Intentionally corrupts storage to show what happens with unsafe upgrades.

---

## Key Concept: Safe vs Unsafe Upgrades

**✅ Safe — always add new variables at the end:**
```solidity
uint256 public count;
address public owner;   // added in V2 — safe!
```

**❌ Unsafe — never reorder existing variables:**
```solidity
address public owner;   // swapped order — breaks storage!
uint256 public count;
```

---

## How It Works

```
Proxy (stores all state)
    +
delegatecall (borrows logic)
    +
Implementation Contract (logic only)
```

The **proxy** holds all data. The **implementation** holds only logic. Upgrading swaps the implementation while the proxy (and its storage) stays untouched.

---

## License

MIT