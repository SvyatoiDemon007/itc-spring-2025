import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  row: 0,
  column: 0,
};

export const knightSlice = createSlice({
  name: 'knight',
  initialState,
  reducers: {
    setPosition: (state, action) => {
      const { row, column } = action.payload;
      state.row = row;
      state.column = column;
    }
  }
});

export const { setPosition } = knightSlice.actions;
