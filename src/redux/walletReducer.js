// redux/walletReducer.js
import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    wallets: [],
    isSyncing: false,
    // lastSynced: ''
  },
  reducers: {
    addWallet(state, action) {
      state.wallets.push(action.payload);
    },
    updateWallet(state, action) {
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
    deleteWallet(state, action) {
      const { address } = action.payload;
      state.wallets = state.wallets.filter((wallet) => wallet.address !== address);
    },
    setSyncing(state, action) {
      state.isSyncing = action.payload;
    },
  },
});

export const { addWallet, updateWallet, deleteWallet, setSyncing } = walletSlice.actions;
export default walletSlice.reducer;
