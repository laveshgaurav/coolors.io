import { combineReducers, configureStore } from "@reduxjs/toolkit";
import generatorReducer from "./generatorReducer/GenerateReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import ToggleReducer from "./toggleReducer/ToggleReducer";
import SaveReducer from "./saveReducer/SaveReducer";
import PalletReducer from "./palletReducer/PalletReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["toggle"],
};

const reducers = combineReducers({
  generator: generatorReducer,
  toggle: ToggleReducer,
  save: SaveReducer,
  pallet: PalletReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

let Store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export default Store;
