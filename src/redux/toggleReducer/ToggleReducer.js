import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  codePopup: false,
  downloadPopup: false,
  savePopup: false,
  openSidebar: false,
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
    setSavePopup: (state, action) => {
      return {
        ...state,
        savePopup: action.payload,
      };
    },
    toggleSidebar: (state, action) => {
      return {
        ...state,
        openSidebar: !state.openSidebar,
      };
    },
  },
});

export const { setCodePopup, setDownloadPopup, setSavePopup, toggleSidebar } =
  toggleSlice.actions;

export default toggleSlice.reducer;
