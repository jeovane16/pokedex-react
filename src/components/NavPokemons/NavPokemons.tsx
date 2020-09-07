import React, { useState, useEffect } from 'react';
import { selectListPokemons } from '../../features/pokemons/pokemonsSlice';
import { useSelector } from 'react-redux';
import './NavPokemons.css';

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

export const NavPokemons = () => {
  const pokemons = useSelector(selectListPokemons);
  const [partialListPokemons, setPartialListPokemons] = useState<Pokemon[]>([]);
  const [position, setPosition] = useState(0);

  useEffect(()=>{
    if(pokemons){
      setPartialListPokemons(pokemons.slice(position,position+5));
    }
  }, [pokemons, position]);


  const formatId = (id:number) => {
    if(id.toString().length === 1){
      return ('00'+id.toString());
    }else if(id.toString().length === 2){
      return ('0'+id.toString());
    }else {
      return (id);
    }
  }

  const getUp = () => {
    if(position>0){
      setPosition(position-5);
    }
  }

  const getDown = () => {
    if(position<=380){
      setPosition(position+5);
    }
  }

  return (
    <nav className = 'navPokemonsContainer'>
      <button className='up' onClick={getUp}/>
      <ul>
        {partialListPokemons.map(pokemon => {
          return (
            <li className='items' key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <div>
                <span>{formatId(pokemon.id)}</span>
                <br/>
              <span>{pokemon.name}</span>
            </div>
          </li>
          );
        })}
      </ul>
      <button className='down' onClick={getDown}/>
    </nav>
  );
}
