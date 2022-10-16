import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  codePopup: false,
  downloadPopup: false,
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
    setDownloadPopup: (state, action) => {
      return {
        ...state,
        downloadPopup: action.payload,
      };
    },
  },
});

export const { setCodePopup, setDownloadPopup } = toggleSlice.actions;

export default toggleSlice.reducer;
