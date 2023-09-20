import { configureStore } from '@reduxjs/toolkit';
import viewTypeMainReducer from './reducers/view-type-for-main';

export const store = configureStore({
  reducer: {
    viewTypeMain: viewTypeMainReducer,
  },
});
