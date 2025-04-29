import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { boardSlice } from './reducers/board';

const reducer = combineSlices(
  boardSlice,
);

export const setupStore = () => configureStore({
  reducer,
});
