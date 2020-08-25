import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import trainerReducer from '../features/trainer/trainerSlice';
import pokemonsReducer from '../features/pokemons/pokemonsSlice';

const customizedMiddleware = getDefaultMiddleware({
  immutableCheck:false,
  serializableCheck: false
})

export const store = configureStore({
  reducer: {
    trainer: trainerReducer,
    pokemons: pokemonsReducer
  },
  middleware: customizedMiddleware,
});

