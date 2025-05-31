import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { knightSlice } from './reducers/KnightSlice';

const reducer = combineReducers({
  knight: knightSlice.reducer,
});

export const setupStore = () => configureStore({
  reducer,
});
