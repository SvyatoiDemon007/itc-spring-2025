import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rowsSlice } from './reducers/rows.js';

const reducer = combineReducers({
  rows: rowsSlice.reducer,
});

export const setupStore = () => configureStore({
  reducer,
});
