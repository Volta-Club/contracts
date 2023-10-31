# Volta Club Smart Contracts

Welcome to the Volta Club Smart Contracts repository! This documentation provides you with all the necessary information and steps to successfully deploy and interact with the Volta Club smart contracts.

## Getting Started
To set up your development environment and deploy the contracts, follow these steps:

### 1. Install Dependencies
Ensure that you have Node.js and Yarn installed on your machine. Then, install the required npm packages by running
`yarn install`.

### 2. Configure Environment Variables
Create a .env file in the root directory of the project. This file should contain your wallet's mnemonic and any other required environment variables. Be sure to fund your wallet to facilitate contract deployment. An example configuration might look like this:
```sh
MNEMONIC="your wallet mnemonic here"
OLD_TOKEN_ADDRESS="your old token to be migrated address here"
```

## Contract Deployment

### Deploy Volta.sol and Other Contracts

Volta.sol is an omnichain ERC20 token contract. To deploy Volta.sol and other related contracts such as Migration, run the following commands:
```sh
yarn deploy:network <network>
```

## Post-Deployment: Set Trusted Remote
> WARNING: You must perform the setTrustedRemote() function call after deployment to ensure proper contract functionality.

## Verify Contract on Etherscan
```sh
yarn verify:network <network> <contract_address> <construct_args>
```