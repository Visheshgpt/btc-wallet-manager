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
    const txId = response.txrefs && response.txrefs.length > 0 && response.txrefs[0]
    const tx = {} 

    if (txId) {
      const txResult = await fetch(`https://api.blockcypher.com/v1/btc/main/txs/7593dfd2f183fea5ef40987fa6c89e20535649667724ae37c253767e7df9cb5f`)
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
