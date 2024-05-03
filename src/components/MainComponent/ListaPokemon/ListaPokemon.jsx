import React from 'react';
import PokemonCard from './PokemonCard';

function ListaPokemon({pokemonList}) {
  // Verificar si pokemonList es null, undefined o no es un array
  if (!pokemonList || !Array.isArray(pokemonList)) {
    // Retornar un mensaje o un componente indicando que no hay pokemones disponibles
return null;
  }

  return (
    <div className="lista-pokemon">
      {pokemonList.map((pokemon, index) => (
        <PokemonCard key={index} id={pokemon.id} name={pokemon.name} image={pokemon.image} />
      ))}
    </div>
  );
}

export default ListaPokemon;


