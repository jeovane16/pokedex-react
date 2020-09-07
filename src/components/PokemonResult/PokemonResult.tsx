import React from 'react';
import { selectPokemon } from "../../features/pokemons/pokemonsSlice";
import {useSelector} from "react-redux";
import logoPokeball from '../../assets/mark-error.svg';

import './PokemonResult.css';

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

export const PokemonResult = (props:{idOrName: string}) => {
  const pokemon = useSelector((state: { pokemons:PokemonsState }) => selectPokemon(state,props.idOrName));

  const formatId = ()=> {
    if(pokemon){
      if(pokemon.id.toString().length === 1){
        return ('00'+pokemon.id.toString());
      }else if(pokemon.id.toString().length === 2){
        return ('0'+pokemon.id.toString());
      }else {
        return (pokemon.id);
      }
    }
  }

  if(pokemon){
    return (
      <div className="containerPokemonResult">
        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        <div className='containerInfo'>
          <span>{formatId()} {pokemon.name}</span>
          <button>INFORMATIONS</button>
        </div>
      </div>
    );
  }

  if(pokemon === undefined){
    return (
      <div className='containerError'>
        <span className='error404'>4<img src={logoPokeball} alt='Pokemon not found'/>4</span>
        <span>pokémon not found</span>
      </div>
    );
  }

  else {
    return (
      <div className='containerPokemonResult'/>
    );
  }
}