import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  row: 0,
  column: 0,
};

export const knightSlice = createSlice({
  name: 'knight',
  initialState,

  reducers: {
    setPosition: (state, action) => {
    },
  },
  selectors: {
    getRow: (state) => state.row,
    getColumn: (state) => state.column,
  },
});
