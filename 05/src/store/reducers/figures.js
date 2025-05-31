import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentFigure: 'knight',
  knightPosition: {
    row: 0,
    column: 0,
  },
  rookPosition: {
    row: 3,
    column: 7,
  },
};

export const figuresSlice = createSlice({
  name: 'figures',
  initialState,
  reducers: {
    setToPosition: (state, action) => {
      const { figure, row, column } = action.payload;
      if (figure === 'knight') {
        state.knightPosition = { row, column };
        state.currentFigure = 'rook';
      } else if (figure === 'rook') {
        state.rookPosition = { row, column };
        state.currentFigure = 'knight';
      }
    },
  },
  selectors: {
    getCurrentFigure: (state) => state.currentFigure,
    getRookPosition: (state) => state.rookPosition,
    getKnightPosition: (state) => state.knightPosition,
  },
});
