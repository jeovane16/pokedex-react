import { configureStore } from '@reduxjs/toolkit';
import trainerReducer from '../features/trainer/trainerSlice';
import pokemonsReducer from '../features/pokemons/pokemonsSlice';

export const store = configureStore({
  reducer: {
    trainer: trainerReducer,
    pokemons: pokemonsReducer
  },
});

