import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  green: {
    row: 0, column: 0, value: 10,
  },
  orange: {
    row: 6, column: 6, value: 10,
  }
}

export const boxesSlice = createSlice({
  name: "boxes",
  initialState,
  reducers: {
    moveBox: (state, action) => {
      const { color, direction } = action.payload;
      const box = state[color];

      if (direction === 'up' && box.row > 0) box.row--;
      if (direction === 'down' && box.row < 7) box.row++;
      if (direction === 'left' && box.column > 0) box.column--;
      if (direction === 'right' && box.column < 7) box.column++;
    }
  },
  selectors: {
    getGreenBox: (state) => state.green,
    getOrangeBox: (state) => state.orange,
    canMove: (state) => ({
      green: true,
      orange: true,
    })
  }
});
