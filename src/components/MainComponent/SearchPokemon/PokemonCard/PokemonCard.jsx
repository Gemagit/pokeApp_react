import React from 'react';

const PokemonCard = ({ name, imageURL }) => {
  return (
    <article className="pokemoncard">
      <img src={imageURL} alt={name} width={"120px"}/>
      <p>{name}</p>
    </article>
  );
};

export default PokemonCard;

