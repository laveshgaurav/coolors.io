import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saved: [],
};

export const saveSlice = createSlice({
  name: "save",
  initialState,
  reducers: {
    setSaved: (state, action) => {
      return {
        ...state,
        saved: [...state.saved, action.payload],
      };
    },
  },
});

export const { setSaved } = saveSlice.actions;
export default saveSlice.reducer;
