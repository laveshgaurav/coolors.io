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
    deleteSavedGradient: (state, action) => {
      return {
        ...state,
        savedGradient: state.savedGradient.filter(
          (item) => item.id !== action.payload
        ),
      };
    },
  },
});

export const { setSavedGradient, deleteSavedGradient } = saveSlice.actions;
export default saveSlice.reducer;
