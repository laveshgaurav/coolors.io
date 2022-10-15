import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gradient: null,
  numColors: 2,
  direction: "to right",
  colorSet: [],
  type: "linear",
};

export const generatorSlice = createSlice({
  name: "generator",
  initialState,
  reducers: {
    setGradient: (state, action) => {
      return {
        ...state,
        gradient: action.payload,
      };
    },
    setNumColors: (state, action) => {
      return {
        ...state,
        numColors: action.payload,
      };
    },
    setDirection: (state, action) => {
      return {
        ...state,
        direction: action.payload,
      };
    },
    setColorSet: (state, action) => {
      return {
        ...state,
        colorSet: action.payload,
      };
    },
    setType: (state, action) => {
      return {
        ...state,
        type: action.payload,
      };
    },
  },
});

export const { setGradient, setNumColors, setDirection, setColorSet, setType } =
  generatorSlice.actions;

export default generatorSlice.reducer;
