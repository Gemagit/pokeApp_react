import React from 'react';

const PokemonCard = ({ name, imageURL }) => {
  return (
    <article className="pokemoncard">
      <img src={imageURL} alt={name} />
      <span>{name}</span>
    </article>
  );
};

export default PokemonCard;

