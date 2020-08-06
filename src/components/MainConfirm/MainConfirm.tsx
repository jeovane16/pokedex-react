import React from 'react';
import './MainConfirm.css';

export const MainConfirm = (props: {trainer: string, name: string}) => {
  return (
    <main className='backgroundMainConfirm'>
      <div className="containerMainConfirm">
        <img src={props.trainer} alt='treinador'/>
        <div className='trainerQuestion'>
          <p>Would your like to be called  <span>{props.name}</span>?</p>
        </div>
        <button>START</button>
      </div>
    </main>
  );
}