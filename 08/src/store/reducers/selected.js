import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  figure: null
}

export const selectedSlice = createSlice({
  name: "selected",
  initialState,

  reducers: {
    setSelected: (state, action) => {
      console.log(action.payload);
      state.figure = action.payload;
    }
  },
  selectors: {
    getSelected: (state) => state.figure,
  }
})
