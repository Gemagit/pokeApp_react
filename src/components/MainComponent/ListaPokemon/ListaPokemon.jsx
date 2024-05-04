import React, { useState, useEffect } from 'react';
import PokemonCard from '../ListaPokemon/PokemonCard';

function ListaPokemon({ searchTerm }) {
  const [isLoading, setIsLoading] = useState(false);
  const [foundPokemon, setFoundPokemon] = useState(null);

  useEffect(() => {
    const searchPokemon = async () => {
      if (!searchTerm.trim()) return;

      try {
        setIsLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
        const data = await response.json();

        setFoundPokemon({ name: data.name, id: data.id, image: data.sprites.front_default });
        setIsLoading(false);
      } catch (error) {
        console.error('Error searching pokemon:', error);
        setIsLoading(false);
      }
    };

    searchPokemon();

  }, [searchTerm]);

  return (
    <>
    {isLoading ? (
      <p>Cargando...</p>
    ) : foundPokemon ? (
      <article>
        <PokemonCard id={foundPokemon.id} name={foundPokemon.name} image={foundPokemon.image} height={foundPokemon.height} weight={foundPokemon.weight} abilities={foundPokemon.abilities}/>
      </article>
    ) : searchTerm.trim() !== '' && (
      <p>No se encontró ningún Pokémon con ese nombre.</p>
    )}
  </>
  );
}

export default ListaPokemon;





