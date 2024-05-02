import React, { useState, useEffect, useRef } from 'react';
import PokemonCard from "./PokemonCard"

const SearchPokemon = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const fetchPokemons = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
        const data = await response.json();
        // simular retardo de llamada a API
        await new Promise((resolve, reject) => setTimeout(resolve, 2000));
        setFilteredPokemons([data]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener el Pokémon:', error);
        setFilteredPokemons([]);
        setIsLoading(false);
      }
    };
    fetchPokemons();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input 
          ref={inputRef} 
          placeholder="Busca tu Pokémon por nombre" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          {filteredPokemons.length > 0 ? (
            <div>
              <h3>{filteredPokemons[0].name}</h3>
              <PokemonCard
                name={filteredPokemons[0].name}
                imageURL={filteredPokemons[0].sprites.front_default}
              />
            </div>
          ) :
            <p>No se encontró ningún Pokémon con ese nombre.</p>
          }
        </div>
      )}
    </section>
  );
};

export default SearchPokemon;

