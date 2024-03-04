import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Wallet {
  address: string;
  walletName: string;
  balance: number;
  tx: any;
}

export interface WalletState {
  wallets: Wallet[];
  isSyncing: boolean;
}

const initialState: WalletState = {
  wallets: [],
  isSyncing: false,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    addWallet(state, action: PayloadAction<Wallet>) {
      state.wallets.push(action.payload);
    },
    updateWallet(state, action: PayloadAction<Wallet>) {
      const { address, walletName, balance, tx } = action.payload;
      const existingWallet = state.wallets.find(
        (wallet) => wallet.address === address
      );
      if (existingWallet) {
        existingWallet.balance = balance;
        existingWallet.tx = tx;
      } else {
        state.wallets.push({ address, walletName, balance, tx });
      }
    },
    deleteWallet(state, action: PayloadAction<{ address: string }>) {
      const { address } = action.payload;
      state.wallets = state.wallets.filter(
        (wallet) => wallet.address !== address
      );
    },
    setSyncing(state, action: PayloadAction<boolean>) {
      state.isSyncing = action.payload;
    },
  },
});

export const { addWallet, updateWallet, deleteWallet, setSyncing } =
  walletSlice.actions;
export default walletSlice.reducer;
