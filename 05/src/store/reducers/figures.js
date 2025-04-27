import { createSlice, createSelector } from '@reduxjs/toolkit'

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
}

const maxRow = 3;
const maxColumn = 7;

export const figuresSlice = createSlice({
  name: 'figures',
  initialState,
  reducers: {
    setToPosition: (state, action) => {
    }
  },
  selectors: {
    getCurrentFigure: (state) => state.currentFigure,
    getRookPosition: (state) => state.rookPosition,
    getKnightPosition: (state) => state.knightPosition,
  },
});
