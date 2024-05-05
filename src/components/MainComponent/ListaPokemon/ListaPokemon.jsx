import React, { useContext } from 'react';
import PokemonCard from '../ListaPokemon/PokemonCard';
import { PokemonContext } from '../../../context/PokemonContext';

function ListaPokemon() {
  const { pokemonList } = useContext(PokemonContext);

  return (
    <>
      {pokemonList.length > 0 ? (
        <article >
          {pokemonList.map(pokemon => (
            <PokemonCard pokemon={pokemon} key={pokemon.id}/>
          ))}
        </article>
      ) : (
        <p>No se han encontrado Pokémon.</p>
      )}
    </>
  );
}

export default ListaPokemon;



