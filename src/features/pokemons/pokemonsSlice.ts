import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { getPokemonList } from '../../services/api';

interface ListPokemons {
  results: [{
    name: string,
    url: string
  }]
}

interface Pokemon {
  id: number,
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
  ]
}

interface ListPokemonsByType {
  pokemon:[{
    pokemon: {
      name: string,
      url: string
    }
  }]
}

export const newListPokemons = createAsyncThunk<
  ListPokemons
  >('pokemons/list', async ()=>{
  try {
    const response: ListPokemons = await getPokemonList().then(res => {
      return res.data;
    });
    return response;
  } catch (e){
    const response = await getPokemonList().catch(error => {
      return error;
    })
    return response;
  }
})

interface PokemonsState {
  initialList: [{name: string, url:string}],
  error: null | string,
  initialListByType: ListPokemonsByType,
  currentPokemon: Pokemon,
  loading: 'idle' | 'pending' | 'fulfilled' | 'reject'
}

const initialState: PokemonsState = {
  initialList: [{
    name: '',
    url: ''
  }],
  error: null,
  initialListByType: {
    pokemon:[{
      pokemon: {
        name: '',
        url: ''
      }
    }]
  },
  loading: 'idle',
  currentPokemon: {
    id: 0,
    sprites: {
      front_default: '',
    },
    stats: [
      {
        base_stat: 0,
        stat:{
          name: '',
          url: ''
        }
      }
    ]
  }
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder.addCase(newListPokemons.pending, (state, action) => {
      state.loading = 'pending';
    })
    builder.addCase(newListPokemons.fulfilled, (state, action)=>{
      state.initialList = action.payload.results;
    })
  }
})

export default pokemonsSlice.reducer;
export const selectListPokemons = (state: { pokemons:PokemonsState }) => {
  return state.pokemons;
}

