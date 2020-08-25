import axios from 'axios';

interface ListPokemons {
  results: [{
    name: string,
    url: string
  }]
}

interface PokemonDescription {
  flavor_text_entries: [
    {
      flavor_text: string,
      version: {
        name: string,
      }
    }
  ]
}

const URL = 'https://pokeapi.co/api/v2/';

/*
* Função que retorna dados de um pokemon com base em seu nome ou em seu id
* @params idOrName
* */
export const getPokemonByIdOrName = async (idOrName: string) => {
  const response = await axios.get(`${URL}pokemon/${idOrName}`);
  return response.data;
}

/*
* Função que retorna uma lista de 386 pokemons
* */
export const getPokemonList = async () => {
  try {
    let newList = [];
    const list = await axios.get<ListPokemons>(`${URL}pokemon?limit=386&offset=0`);
    for(let i=0; i<list.data.results.length; i++){
      let pokemon = await getPokemonByIdOrName(list.data.results[i].name);
      newList.push(pokemon);
    }
    return newList;
  }
  catch (error){
    return error;
  }
}

/*
* Função que retorna uma breve descrição sobre o pokémon
* @params url
* */
export const getPokemonDescription = async (url:string) => {
  const response = await axios.get<PokemonDescription>(url);
  for(let i = 0; i<response.data.flavor_text_entries.length; i++){
    if(response.data.flavor_text_entries[i].version.name === 'ruby'){
      return response.data.flavor_text_entries[i].flavor_text;
    }
  }
}