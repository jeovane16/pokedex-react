import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import './Footer.css';

export const Footer = ()=> {
  return(
    <footer className='containerFooter'>
      <p>CREATED BY JEOVANE ARAUJO</p>
      <div className='containerIcons'>
        <a className='icons' href='https://www.github.com/jeovane16'>
          <AiFillGithub size={40} color='#FFF'/>
        </a>
        <a className='icons' href='https://www.linkedin.com/in/jeovane-araujo-566a96170/'>
          <AiFillLinkedin size={40} color='#FFF'/>
        </a>
      </div>
    </footer>
  );
};