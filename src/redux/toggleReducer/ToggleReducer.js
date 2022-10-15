import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  codePopup: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setCodePopup: (state, action) => {
      return {
        ...state,
        codePopup: action.payload,
      };
    },
  },
});

export const { setCodePopup } = toggleSlice.actions;

export default toggleSlice.reducer;
