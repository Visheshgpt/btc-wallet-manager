# Bitcoin Wallet Manager

Bitcoin Wallet Manager is a web application that allows users to manage their Bitcoin testnet wallets. Users can import wallets, view wallet balances, and see transaction history without storing any data permanently.

## Features

1. Import Bitcoin testnet wallets
2. View wallet balances
3. View transaction history
4. Re-sync wallets to fetch the latest balance and transactions

## Live Demo

Check out the live demo [here](https://bitcoin-wallet-manager.vercel.app/).


## Installation

### Requirements
Node.js version 18.17.0

1. Clone the repository:
   ```sh
   git clone https://github.com/Visheshgpt/btc-wallet-manager.git
   ```
2. Install dependencies:
   ```sh
   cd bitcoin-wallet-manager
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   The application will be available at http://localhost:3000

## Usage

### Import Wallet

Click the "Import Wallet" button to add a new Bitcoin testnet wallet. Enter the mnemonic and a name for the wallet.

### View Wallets

The application displays a list of imported wallets with their names, addresses, and balances.

### Sync Wallets

Click the "Re-Sync" button in the top bar to sync all wallets. This fetches the latest balance and transaction history for each wallet.

### Delete Wallet

Click the delete button next to a wallet to remove it from the list.
