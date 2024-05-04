import React from 'react';
import { useLocation } from 'react-router-dom';

function DetailsPokemon() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const name = params.get('name');
  const image = params.get('image');
  const typeOne = params.get('typeOne');
  const height = params.get('height');
  const weight = params.get('weight');
  const abilities = params.get('abilities');

  return (
    <article className='details'>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <p>{id}</p>
        <p>Nombre: {name}</p>
        <p>Tipo: {typeOne}</p>
        <p>Altura: {height}</p>
        <p>Peso: {weight}</p>
        <p>Habilidades: {abilities}</p>
    </article>
  );
}

export default DetailsPokemon;





