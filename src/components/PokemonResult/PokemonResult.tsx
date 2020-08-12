import React from 'react';
import { selectCurrentPokemon, selectListPokemons } from "../../features/pokemons/pokemonsSlice";
import {useSelector} from "react-redux";
import logoPokeball from '../../assets/mark-error.svg';

import './PokemonResult.css';

export const PokemonResult = () => {
  const pokemon = useSelector(selectCurrentPokemon);
  const error = useSelector((state:{pokemons:{error:number | null}}) => state.pokemons.error);
  const status = useSelector(selectListPokemons);

  const formatId = ()=> {
    if(pokemon.id.toString().length === 1){
      return ('00'+pokemon.id.toString());
    }else if(pokemon.id.toString().length === 2){
      return ('0'+pokemon.id.toString());
    }else {
      return (pokemon.id);
    }
  }

  if(status.loading === 'idle'){
    return (
      <div className='containerPokemonResult'/>
    );
  }

  if(error){
    return (
      <div className='containerError'>
        <span className='error404'>4<img src={logoPokeball}/>4</span>
        <span>pokémon not found</span>
      </div>
    );
  }

  // if()

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