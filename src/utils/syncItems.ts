import { updateWallet } from "@/redux/walletReducer";

interface Tx {
  walletName: string;
  address: string;
  date: string;
  inputs: any[];
  outputs: any[];
}

export class SyncItem {
  private dispatch: any;
  private walletId: string;
  private walletName: string;

  constructor(dispatch: any, walletId: string, walletName: string) {
    this.dispatch = dispatch;
    this.walletId = walletId;
    this.walletName = walletName;
  }

  async sync(): Promise<void> {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_WALLET_API_MAINNET}/${this.walletId}`
    );
    const response = await result.json();
    const balance = response.balance;
    const txId = response?.txrefs[0]?.tx_hash;
    const tx: Tx = {
      walletName: "",
      address: "",
      date: "",
      inputs: [],
      outputs: [],
    };

    if (txId) {
      const txResult = await fetch(
        `${process.env.NEXT_PUBLIC_TX_API_MAINNET}/${txId}`
      );
      const txResponse = await txResult.json();
      tx.walletName = this.walletName;
      tx.address = this.walletId;
      tx.date = txResponse.confirmed;
      tx.inputs = txResponse.inputs;
      tx.outputs = txResponse.outputs;
    }

    console.log(`Syncing balance for wallet ${this.walletId}: ${balance}`);

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
