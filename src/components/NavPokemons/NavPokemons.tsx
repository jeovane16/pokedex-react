import React from 'react';
import { selectListPokemons } from '../../features/pokemons/pokemonsSlice';
import { useSelector } from 'react-redux';

import './NavPokemons.css';

export const NavPokemons = () => {
  const pokemons = useSelector(selectListPokemons);

  const formatId = (id:number)=> {
    if(id.toString().length === 1){
      return ('00'+id.toString());
    }else if(id.toString().length === 2){
      return ('0'+id.toString());
    }else {
      return (id);
    }
  }


  return (
    <nav className='navPokemonsContainer'>
      <ul>
          {pokemons.map(pokemon => {
              return (
                  <li key={pokemon.id}>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    <div>
                      <span>{formatId(pokemon.id)}</span>
                      <br/>
                      <span>{pokemon.name}</span>
                    </div>
                  </li>
              )
          })}
      </ul>
    </nav>
  );
}