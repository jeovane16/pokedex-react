import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MainHome } from './components/MainHome/MainHome';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import {MainPokedex} from "./components/MainPokedex/MainPokedex";
import {useDispatch, useSelector} from "react-redux";
import {listPokemons} from "./features/pokemons/pokemonsSlice";

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

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state: { pokemons:PokemonsState }) => state.pokemons.loading);

  if(loading === 'idle'){
    dispatch(listPokemons());
  }

  return (
    <BrowserRouter>
      <Header/>
      <div className="App">
        <Switch>
          <Route exact path='/' render={()=>
            <MainHome/>
          }/>
          <Route exact path='/pokedex' render={MainPokedex}/>
        </Switch>
      </div>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
