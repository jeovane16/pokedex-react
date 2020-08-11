import axios from 'axios';

const URL = 'https://pokeapi.co/api/v2/';

/*
* Função que retorna dados de um pokemon com base em seu nome ou em um id
* @params idOrName
* */
export const getPokemonByIdOrName = (idOrName: string) => {
  return (axios.get(`${URL}pokemon/${idOrName}`));
}

/*
* Função que retorna uma lista de 807 pokemons
* */
export const getPokemonList = ()=>{
  return (axios.get(`${URL}pokemon?limit=807&offset=0`));
}

/*
* Função que retorna um lista de pokemons com base em seus tipos
* @params type
* */
export const getPokemonsByType =  (type: string) => {
  return (axios.get(`${URL}type/${type}`));
}