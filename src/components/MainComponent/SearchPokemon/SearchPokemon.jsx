import React, { useState, useContext } from 'react';
import axios from 'axios';
import { PokemonContext } from '../../../context/PokemonContext';
//import { debounce } from 'lodash';
//import {useDebounce} from "use-debounce";
import ListaPokemon from '../ListaPokemon';

function SearchPokemon() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setPokemonList } = useContext(PokemonContext);
//let debounceTimer=null;//Almacena el identificador del temporizador debounce

  const searchPokemon = async (searchTerm) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      const data = response.data;
  
      const newPokemon = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        weight: data.weight,
        height: data.height,
        typeOne: data.types[0].type.name,
        abilities: data.abilities[0].ability.name
      };
  
      // Use the useContext hook to access the current list of Pokemon
      setPokemonList(prevList => {
        // Check if the Pokemon already exists in the list based on its id
        const exists = prevList.some(pokemon => pokemon.id === newPokemon.id);
        if (exists) {
          alert("El pokemon ya esta en la lista");
          return prevList; // Return the unchanged list if the Pokemon is already there
        } else {
          return [...prevList, newPokemon]; // Add the new Pokemon to the list
        }
      });
  
    } catch (error) {
      console.log('Ese Pokemon no existe');
    } finally {
      setIsLoading(false);
      setSearchTerm(''); // Clear the input after search
    }
  };

  
  //const debouncedSearchPokemon = debounce(searchPokemon, 5000);


  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  /*   // Cancela el debounce previo antes de configurar uno nuevo
    clearTimeout(debounceTimer);
    // Configura un nuevo debounce
    debounceTimer = setTimeout(() => {
      searchPokemon(value);
    },1500); // Puedes ajustar el tiempo de espera aquí */
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      searchPokemon(searchTerm);
    }
  }

  return (
    <section className='sectionsearch'>
      <form className="search" onSubmit={handleSubmit}>
        <h2>Encuentra un Pokemon</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Buscar Pokemon"
        />
        <button type="submit">Buscar</button>
      </form>
      <ListaPokemon />
    </section>
  );
}

export default SearchPokemon;

