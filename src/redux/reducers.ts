import { combineReducers } from "@reduxjs/toolkit";
import walletReducer from "./walletReducer";
import { WalletState } from "./walletReducer";

const rootReducer = combineReducers({
  wallet: walletReducer,
});

export type RootState = {
  wallet: WalletState;
};

export default rootReducer;
