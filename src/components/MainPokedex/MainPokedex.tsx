import React from 'react';

import './MainPokedex.css';

import { FilterByType } from '../FilterByType/FilterByType';
import { FilterByIdOrName } from '../FilterByIdOrName/FilterByIdOrName';
import { NavPokemons } from '../NavPokemons/NavPokemons';

export const MainPokedex = () => {

  return(
    <main className="containerMainPokedex">
      <div className='filter'>
        <div className='filterAndResult'>
        <FilterByIdOrName/>
        </div>
        <FilterByType/>
      </div>
      <NavPokemons/>
    </main>
  )
}