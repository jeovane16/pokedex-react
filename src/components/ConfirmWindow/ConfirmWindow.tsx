import React from 'react';
import './ConfirmWindow.css';
import {useSelector, useDispatch} from 'react-redux';

import { Link } from 'react-router-dom';

import { setedTrainer } from '../../features/trainer/trainerSlice';

interface Trainer {
  trainer:{
    name: string,
    avatar: string
  }
}

export const ConfirmWindow = () => {
  const trainer = useSelector((state: Trainer) => {
    return state.trainer;
  });

  const dispatch = useDispatch();

  const onClickCancel = ()=>{
    dispatch(setedTrainer({
      avatar: '',
      name: ''
    }))
  }

  return (
    <div className='backgroundMainConfirm'>
      <div className="containerMainConfirm">
        <img src={trainer.avatar} alt='treinador'/>
        <div className='trainerQuestion'>
          <p>Would you like to be called <span>{trainer.name}</span>?</p>
        </div>
        <div className='buttonsAction'>
          <button className='button' onClick={onClickCancel}>CANCEL</button>
          <Link to='/pokedex' className='button'>START</Link>
        </div>
      </div>
    </div>
  );
}