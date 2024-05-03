import React from 'react';
import { Link } from 'react-router-dom';

function PokemonCard({ id, name, image, typeOne }) {
  return (
    <Link to={`/pokemon/${id}?name=${name}&image=${image}&typeOne=${typeOne}`}>
      <div className="pokemon-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
    </Link>
  );
}

export default PokemonCard;



