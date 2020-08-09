import React from 'react';

import './FIlterByType.css';

export const FilterByType = ()=>{
  const types = [
    {name:'normal', color:'#A8A878'}, {name:'fighting', color: '#C03028'}, {name:'flying', color: '#A890F0'},
    {name:'poison', color: '#A040A0'}, {name:'ground', color: '#E0C068'}, {name:'rock', color: '#B8A038'},
    {name:'bug', color: '#A8B820'}, {name:'ghost', color: '#705898'}, {name:'steel', color: '#B8B8D0'},
    {name:'fire', color: '#F08030'}, {name:'water', color: '#6890F0'}, {name:'grass', color: '#7DB808'},
    {name:'electric', color: '#F8D030'}, {name:'psychic', color: '#F85888'}, {name:'ice', color: '#98D8D8'},
    {name:'dragon', color: '#C6A114'}, {name: 'dark', color: '#705848'}, {name:'fairy', color: '#EE99AC'}
  ];

  return (
    <div className='containerFilterByType'>
      <span>FILTER BY TYPE</span>
      <ul className='listTypes'>
        {types.map(type =>
          <li tabIndex={1} style={{backgroundColor:type.color}} key={type.name}>{type.name}</li>
        )}
      </ul>
    </div>
  );
}