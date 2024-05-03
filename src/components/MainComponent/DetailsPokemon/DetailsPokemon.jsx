// En el componente PokemonDetails
import React from 'react';
import { useParams } from 'react-router-dom';

function DetailsPokemon() {
  const { id } = useParams();
  const { name, image, typeOne, height, weight, abilities, stats } = new URLSearchParams(window.location.search);

  return (
    <div>
      <h2>Detalles del Pokémon {name}</h2>
      <img src={image} alt={name} />
      <p>ID: {id}</p>
      <p>Nombre: {name}</p>
      <p>Tipo: {typeOne}</p>
      <p>Altura: {height}</p>
      <p>Peso: {weight}</p>
      <p>Habilidades: {abilities}</p>
      <p>Estadísticas:</p>
      <ul>
        {stats && stats.split(',').map((stat, index) => (
          <li key={index}>{stat}</li>
        ))}
      </ul>
    </div>
  );
}

export default DetailsPokemon;

