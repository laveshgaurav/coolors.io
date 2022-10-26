import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedGradient: [],
  savedPallet: [],
};

export const saveSlice = createSlice({
  name: "save",
  initialState,
  reducers: {
    setSavedGradient: (state, action) => {
      return {
        ...state,
        savedGradient: [...state.savedGradient, action.payload],
      };
    },
  },
});

export const { setSavedGradient } = saveSlice.actions;
export default saveSlice.reducer;
