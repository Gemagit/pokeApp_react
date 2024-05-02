import React from 'react';

const PokemonCard = ({ name, imageURL }) => {
  return (
    <div className="pokemon-item">
      <img src={imageURL} alt={name} />
      <span>{name}</span>
    </div>
  );
};

export default PokemonCard;

