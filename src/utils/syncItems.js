import { updateWallet } from "@/redux/walletReducer";

export class SyncItem {
  constructor(dispatch, walletId, walletName) {
    this.dispatch = dispatch;
    this.walletId = walletId;
    this.walletName = walletName;
  }

  async sync() {
    // Fetch balance for the walletId
    const result = await fetch(
      `https://api.blockcypher.com/v1/btc/main/addrs/${this.walletId}`
    );
    const response = await result.json();
    const balance = response.balance;
    const txId = response?.txrefs[0].tx_hash
    const tx = {} 

    if (txId) {
      const txResult = await fetch(`https://api.blockcypher.com/v1/btc/main/txs/${txId}`)
      const response = await txResult.json();
      tx.walletName = this.walletName;
      tx.address = this.walletId;
      tx.date = response.confirmed;
      tx.inputs = response.inputs;
      tx.outputs = response.outputs
    }

    console.log(`Syncing balance for wallet ${this.walletId}: ${balance}`);

    // Dispatch action to update wallet information
    this.dispatch(
      updateWallet({
        address: this.walletId,
        balance,
        tx,
        walletName: this.walletName,
      })
    );
  }
}

// export class HistorySyncItem {
//   constructor(private walletId: string) {}

//   async sync() {
//     // Fetch transaction history for the walletId
//     console.log(`Syncing history for wallet ${this.walletId}`);
//   }
// }
