import { createSlice } from "@reduxjs/toolkit";
import {
  generateHexCodeString,
  generateNearbyColor,
} from "../../constants/Utility";

const initialState = {
  pallet: [],
};

export const palletSlice = createSlice({
  name: "pallet",
  initialState,
  reducers: {
    setPallet: (state, action) => {
      return {
        ...state,
        pallet: action.payload,
      };
    },
    updatePallet: (state, action) => {
      let newColor = generateNearbyColor(action.payload.color);
      return {
        ...state,
        pallet: [
          ...state?.pallet?.slice(0, action.payload?.position),
          newColor,
          ...state?.pallet?.slice(action.payload?.position),
        ],
      };
    },
  },
});

export const { setPallet, updatePallet } = palletSlice.actions;

export default palletSlice.reducer;
