import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { getPokemonList } from '../../services/api';

//Interfaces para a slice

interface Pokemon {
  id: number,
  name: string,
  species: {
    url: string
  },
  sprites: {
    front_default: string;
  },
  stats: [
    {
      base_stat: number,
      stat:{
        name: string,
        url: string
      }
    }
  ],
  types: [
    {
      type:{name: string}
    }
  ]
}

interface PokemonsState {
  initialList: Pokemon[],
  error: null | string,
  loading: 'idle' | 'pending' | 'fulfilled' | 'reject'
}

//thunk para api

export const listPokemons = createAsyncThunk<
  Pokemon[],
  void,
    {
      rejectValue: string
    }
  >('pokemons/list', async (_, thunkAPI) => {
    try {
      return await getPokemonList();
    }
    catch (error){
      return thunkAPI.rejectWithValue(error)
  }
})

const initialState: PokemonsState = {
  initialList: [],
  error: null,
  loading: 'idle'
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder.addCase(listPokemons.pending, (state, action) => {
      state.loading = 'pending';
    })
    builder.addCase(listPokemons.fulfilled, (state, action)=>{
      if(state.loading==='pending'){
        state.initialList = action.payload;
        state.loading = 'fulfilled';
      }
    })
  }
})

export default pokemonsSlice.reducer;


export const selectPokemon = (state: { pokemons: PokemonsState }, idOrName: string) => {
  if(!idOrName){
    return null;
  }
  if(isNaN(parseInt(idOrName))){
    return state.pokemons.initialList.find((pokemon)=> pokemon.name === idOrName);
  }
  else {
    return state.pokemons.initialList.find((pokemon)=> pokemon.id === parseInt(idOrName));
  }
}

export const selectListPokemons = (state: { pokemons:PokemonsState }) => {
  return state.pokemons.initialList;
}
