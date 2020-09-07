import React from 'react';
import './LoadingPokemon.css';

import loadingPokeball from '../../assets/mark-error.svg';

export const LoadingPokemon = () => {

  return (
    <div className='backgroundLoadingPokemon'>
      <div className="containerLoadingPokemon">
        <img src={loadingPokeball} alt='pokeball'/>
        <div className='paragraph'>
          <p>Catching pokemons!!!</p>
        </div>
      </div>
    </div>
  );
}