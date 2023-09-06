# Volta Club Contracts

## Deploy Setup

1. Add a .env file (to the root project directory) with your MNEMONIC="" and fund your wallet in order to deploy!
2. Install npm packages - `yarn install` or `npm install`

## Wonderland.sol - an omnichain ERC20

> WARNING: **You must perform the setTrustedRemote() (step 2).**

Deploy two contracts - Wonderland & Migration:

```angular2html
yarn deploy:network <network>
npm run deploy:network <network>
```

Verify contract

```angular2html
yarn verify:network <network> <contract_address> <construct args>
npm run verify:network <network> <contract_address> <construct args>
```
