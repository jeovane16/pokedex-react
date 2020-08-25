import React from 'react';
import './MainPokedex.css';
import { FilterByType } from "../FilterByType/FilterByType";
import { FilterByIdOrName } from "../FilterByIdOrName/FilterByIdOrName";

export const MainPokedex = ()=>{
  return(
    <main className="containerMainPokedex">
      <div className='filter'>
        <FilterByIdOrName/>
      </div>
      <FilterByType/>
    </main>
  )
}