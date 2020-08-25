import React, {ChangeEvent, FormEvent, useState} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { PokemonResult } from '../PokemonResult/PokemonResult';
import './FilterByIdOrName.css';

export const FilterByIdOrName = ()=> {

  const [idOrName, setIdOrName] = useState('');
  const [currentIdOrName, setCurrentIdOrName] = useState('');

  const onChangeIdOrName = (event: ChangeEvent<HTMLInputElement>) => {
    setIdOrName(event.target.value);
  }

  const onClickSearch = (event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    setCurrentIdOrName(idOrName);
    setIdOrName('');
  }

  return (
    <>
      <div className="containerFilterByIdOrName">
        <form onSubmit={onClickSearch}>
          <input type='text' placeholder='NAME OR ID' value={idOrName} onChange={onChangeIdOrName}/>
          <button type='submit'>
            <AiOutlineSearch color='#FFFFFF' size={30}/>
          </button>
        </form>
      </div>
      <PokemonResult idOrName={currentIdOrName}/>
    </>
  );
}