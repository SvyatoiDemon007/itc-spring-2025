import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  1: [1, 2, 3],
  2: [],
  3: [],
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    moveDisk: (state, action) => {
      const { from, to } = action.payload;
      const fromPole = state[from];
      const toPole = state[to];
      if (fromPole.length === 0) return;
      const disk = fromPole[fromPole.length - 1];
      const topToDisk = toPole[toPole.length - 1];
      if (!topToDisk || topToDisk > disk) {
        fromPole.pop();
        toPole.push(disk);
      }
    }
  },
  selectors: {
    getItems: (state) => state,
  },
});
