import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { knightSlice } from './reducers/KnightSlice';

const reducer = combineReducers({
  [knightSlice.reducer]: knightSlice,
});

export const setupStore = () => configureStore({
  reducer,
});
