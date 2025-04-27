import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  rows: [
    { id: 1, name: "Петр Сидоров", city: "Екатеринбург" },
    { id: 2, name: "Иван Сидоров", city: "Екатеринбург" },
    { id: 3, name: "Сидор Сидоров", city: "Екатеринбург" },
    { id: 4, name: "Иннокентий Сидоров", city: "Екатеринбург" },
  ],
}

const getRows = (state) => state.rows;

export const rowsSlice = createSlice({
  name: "rows",
  initialState,
  reducers: {
    setRow: (state, action) => {
    }
  },
  selectors: {
  },
});
