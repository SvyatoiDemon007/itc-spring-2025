import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  figures: {}, // [<row>:<col>]: slug
}

const boardKey = (row, column) => "" + row + ":" + column;
export const getFigure = (figures, row, column) => (
  figures[boardKey(row, column)]
);

export const onBoardSlice = createSlice({
  name: "onboard",
  initialState,

  reducers: {
    setFigure: (state, action) => {
      const { row, column, slug } = action.payload;
      state.figures[boardKey(row, column)] = slug;
    }
  },
  selectors: {
    getFigures: (state) => state.figures,
  }
})
