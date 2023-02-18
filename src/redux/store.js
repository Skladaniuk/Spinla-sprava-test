import { configureStore } from '@reduxjs/toolkit'
import listReducer from './list/listReducer';

export const store = configureStore({
  reducer: {
   list:listReducer,

  }
})