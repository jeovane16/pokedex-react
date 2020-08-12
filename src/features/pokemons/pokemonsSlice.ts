import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { getPokemonByIdOrName, getPokemonList } from '../../services/api';
import { AxiosError } from "axios";

//Interfaces para a slice
interface MyKnownError {
  messageError: null | string
}

interface ListPokemons {
  results: [{
    name: string,
    url: string
  }]
}

interface Pokemon {
  id: number,
  name: string,
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
    {type:{name: string}}
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

interface PokemonsState {
  initialList: [{name: string, url:string}],
  error: null | string,
  initialListByType: ListPokemonsByType,
  currentPokemon: Pokemon,
  loading: 'idle' | 'pending' | 'fulfilled' | 'reject'
}

//thunk para api

export const getPokemon = createAsyncThunk<
  Pokemon,
  string,
  {
    rejectValue: null | string
  }
>('pokemons/pokemon', async (nameOrId:string, thunkAPI) => {
  const response =  await getPokemonByIdOrName(nameOrId).then(res => {
    return res.data as Pokemon;
  }).catch((error:AxiosError<Error>) => {
    return thunkAPI.rejectWithValue(error.message)
  });
  return response;
})

export const getListPokemons = createAsyncThunk<
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
    name: '',
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
    ],
    types: [
      {type:{name: ''}}
    ]
  }
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder.addCase(getListPokemons.pending, (state, action) => {
      state.loading = 'pending';
    })
    builder.addCase(getListPokemons.fulfilled, (state, action)=>{
      state.initialList = action.payload.results;
      state.loading = 'fulfilled';
    })
    builder.addCase(getPokemon.fulfilled, (state, action)=>{
      state.currentPokemon = action.payload;
      state.error = null;
      state.loading = 'fulfilled';
    })
    builder.addCase(getPokemon.rejected, (state, action) => {
      if(action.payload){
        state.error = action.payload;
        state.loading = 'reject';
      }
    })
  }
})

export default pokemonsSlice.reducer;

export const selectCurrentPokemon = (state: { pokemons: PokemonsState }) => {
  return state.pokemons.currentPokemon;
}
export const selectListPokemons = (state: { pokemons:PokemonsState }) => {
  return state.pokemons;
}

