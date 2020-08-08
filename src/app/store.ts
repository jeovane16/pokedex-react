import { configureStore } from '@reduxjs/toolkit';
import trainerReducer from '../features/trainer/trainerSlice';

export const store = configureStore({
  reducer: {
    trainer: trainerReducer
  },
});

