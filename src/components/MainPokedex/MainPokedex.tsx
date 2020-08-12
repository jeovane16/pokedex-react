import React from 'react';
import './MainPokedex.css';
import { FilterByType } from "../FilterByType/FilterByType";
import { FilterByIdOrName } from "../FilterByIdOrName/FilterByIdOrName";
import { PokemonResult } from "../PokemonResult/PokemonResult";

export const MainPokedex = ()=>{
  return(
    <main className="containerMainPokedex">
      <div className='filter'>
        <FilterByIdOrName/>
        <PokemonResult/>
      </div>
      <FilterByType/>
    </main>
  )
}