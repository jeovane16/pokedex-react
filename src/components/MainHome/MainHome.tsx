import React, {ChangeEvent, FormEvent, useState} from 'react';
import pokeball from '../../assets/mark-pokeball.svg';
import man from '../../assets/man.png';
import woman from '../../assets/woman.png';
import { useDispatch, useSelector } from 'react-redux';

import { setedTrainer } from '../../features/trainer/trainerSlice';

import './MainHome.css';

import { ConfirmWindow } from '../ConfirmWindow/ConfirmWindow';

interface Trainer {
  trainer:{
    name: string,
    avatar: string
  }
}

export const MainHome = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const trainer = useSelector((state:Trainer) => state.trainer);

  const dispatch = useDispatch();

  const onNameChanged = (e:ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const selectedMan = () => setAvatar(man);
  const selectedWoman = () => setAvatar(woman)

  const onStartClicked = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(name && avatar){
      dispatch(setedTrainer({
        avatar,
        name,
      }))
    }
    setAvatar('');
    setName('');
  }

  return(
    <main className="mainHomeContainer">
      <img className='logoPokeball' src={pokeball} alt='Logo pokebola'/>
      <span>CHOOSE YOUR CHARACTER</span>
      <div className="trainers">
        <img
          className={(avatar === man) ? 'select' : 'noSelect'}
          src={man} alt='Treinador'
          tabIndex={1}
          onClick={selectedMan}
        />
        <img
          className={(avatar === woman) ? 'select' : 'noSelect'}
          src={woman} alt='Treinadora' tabIndex={1}
          onClick={selectedWoman}
        />
      </div>
      <form className='formTrainer' onSubmit={onStartClicked}>
        <label htmlFor="nameTrainer">
          ENTER YOUR TRAINER NAME
        </label>
        <input type="text" name='nameTrainer' onChange={onNameChanged}/>
        <button type='submit' >START</button>
      </form>
      {(trainer.avatar && trainer.name) ? <ConfirmWindow/> : ''}
    </main>
  );
}