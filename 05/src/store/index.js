import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { figuresSlice } from './reducers/figures.js'

const reducer = combineReducers({
  [figuresSlice.reducerPath]: figuresSlice.reducer,
});

export const setupStore = () => configureStore({
  reducer,
});
