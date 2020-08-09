import React from 'react';
import './MainPokedex.css';
import { FilterByType } from "../FilterByType/FilterByType";

export const MainPokedex = ()=>{
  return(
    <main className="containerMainPokedex">
      <FilterByType/>
    </main>
  )
}