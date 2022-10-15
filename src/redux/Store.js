import { combineReducers, configureStore } from "@reduxjs/toolkit";
import generatorReducer from "./generatorReducer/GenerateReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  generator: generatorReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

let Store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export default Store;
