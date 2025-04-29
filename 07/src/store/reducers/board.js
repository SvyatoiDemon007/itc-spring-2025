import { createSlice } from "@reduxjs/toolkit";

const boardWidth = 7;
const middle = Math.floor(boardWidth / 2);

export const onBoard = (x, y) => {
  const result = (
    (x >= 0 && x < boardWidth) &&
      (y >= 0 && y < boardWidth) &&
      ((Math.abs(x - middle) <= 1) || (Math.abs(y - middle) <= 1))
  );

  return result;
}

const fillBoard = () => {
  const result = {};

  for (let i = 0; i < boardWidth; i++) {
    for (let j = 0; j < boardWidth; j++) {
      if (onBoard(i, j)) {
        result["" + i + ":" + j] = true;
      }
    }
  }

  // remove middle
  result["3:3"] = false;

  return result;
}

const initialState = {
  selected: null, // { row: number, col: number }
  cells: fillBoard(),
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
  },
  selectors: {
    getSelected: (state) => {
      return state.selected;
    },
    getCells: (state) => state.cells,
  },
});
