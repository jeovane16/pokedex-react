import React, {ChangeEvent, FormEvent, useState} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { getPokemon } from "../../features/pokemons/pokemonsSlice";
import './FilterByIdOrName.css';
import {useDispatch} from "react-redux";

export const FilterByIdOrName = ()=> {
  const dispatch = useDispatch();

  const [idOrName, setIdOrName] = useState('');

  const onChangeIdOrName = (event: ChangeEvent<HTMLInputElement>) => {
    setIdOrName(event.target.value);
  }

  const onClickSearch = (event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    dispatch(getPokemon(idOrName));
    setIdOrName('');
  }

  return (
    <div className="containerFilterByIdOrName">
      <form onSubmit={onClickSearch}>
        <input type='text' placeholder='NAME OR ID' value={idOrName} onChange={onChangeIdOrName}/>
        <button type='submit'>
          <AiOutlineSearch color='#FFFFFF' size={30}/>
        </button>
      </form>
    </div>
  );
}