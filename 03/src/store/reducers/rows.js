import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  rows: [
    { id: '1', name: "Петр Сидоров", city: "Екатеринбург" },
    { id: '2', name: "Иван Сидоров", city: "Екатеринбург" },
    { id: '3', name: "Сидор Сидоров", city: "Екатеринбург" },
    { id: '4', name: "Иннокентий Сидоров", city: "Екатеринбург" },
  ],
};

export const rowsSlice = createSlice({
  name: "rows",
  initialState,
  reducers: {
    setRow: (state, action) => {
      const { id, name, city } = action.payload;
      const index = state.rows.findIndex(row => row.id === id);
      if (index !== -1) {
        state.rows[index] = { id, name, city };
      }
    }
  }
});

const getRows = (state) => state.rows.rows;

rowsSlice.selectors = { getRows };
