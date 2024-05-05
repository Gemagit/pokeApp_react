
import React from 'react';
import { Link } from 'react-router-dom';

function PokemonCard({ pokemon}) {
  return (
    <article className='card'>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.image} alt={pokemon.name} />
      <Link to={`/pokemon/${pokemon.id}?name=${pokemon.name}&image=${pokemon.image}&typeOne=${pokemon.typeOne}&height=${pokemon.height}&weight=${pokemon.weight}&abilities=${pokemon.abilities}`}>
      <button className="more-info-link">Más info</button>
      </Link>
    </article>
  );
}


export default PokemonCard;