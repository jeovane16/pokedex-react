import React from 'react';
import './MainPokedex.css';
import { FilterByType } from "../FilterByType/FilterByType";
import { FilterByIdOrName } from "../FilterByIdOrName/FilterByIdOrName";

export const MainPokedex = ()=>{
  return(
    <main className="containerMainPokedex">
      <FilterByIdOrName/>
      <FilterByType/>
    </main>
  )
}