import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { figuresSlice } from './reducers/figures';

const reducer = combineReducers({
  figures: figuresSlice.reducer,
});

export const setupStore = () => configureStore({
  reducer,
});
