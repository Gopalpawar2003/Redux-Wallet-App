import { createStore } from "redux";
import { walletReducer } from "./reducer";

export const store = createStore(walletReducer);
