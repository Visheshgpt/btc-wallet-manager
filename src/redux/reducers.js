import { combineReducers } from "@reduxjs/toolkit";
import walletReducer from "./walletReducer";

const rootReducer = combineReducers({
  wallet: walletReducer,
});

export default rootReducer;
