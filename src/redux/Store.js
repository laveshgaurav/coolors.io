import { combineReducers, configureStore } from "@reduxjs/toolkit";
import generatorReducer from "./generatorReducer/GenerateReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import ToggleReducer from "./toggleReducer/ToggleReducer";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  generator: generatorReducer,
  toggle: ToggleReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

let Store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export default Store;
