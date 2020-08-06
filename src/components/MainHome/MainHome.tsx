import React from 'react';
import pokeball from '../../assets/mark-pokeball.svg';
import man from '../../assets/man.png';
import woman from '../../assets/woman.png';

import './MainHome.css';

export const MainHome = () => {
  return(
    <main className="mainHomeContainer">
      <img className='logoPokeball' src={pokeball} alt='Logo pokebola'/>
      <span>CHOOSE YOUR CHARACTER</span>
      <div className="trainers">
        <img src={man} alt='Treinador' tabIndex={1}/>
        <img src={woman} alt='Treinadora' tabIndex={1}/>
      </div>
      <form className='formTrainer'>
        <label htmlFor="nameTrainer">
          ENTER YOUR TRAINER NAME
        </label>
        <input type="text" name='nameTrainer'/>
        <button type='submit'>START</button>
      </form>
    </main>
  );
}