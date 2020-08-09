import React, {ChangeEvent, useState} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './FilterByIdOrName.css';

export const FilterByIdOrName = ()=> {

  const [idOrName, setIdOrName] = useState('');

  const onChangeIdOrName = (event: ChangeEvent<HTMLInputElement>) => {
    setIdOrName(event.target.value);
  }

  return (
    <div className="containerFilterByIdOrName">
      <form action="">
        <input type='text' placeholder='NAME OR ID' value={idOrName} onChange={onChangeIdOrName}/>
        <button>
          <AiOutlineSearch color='#FFFFFF' size={30}/>
        </button>
      </form>
    </div>
  );
}