
import React from 'react';
import { Link } from 'react-router-dom';

function PokemonCard({ id, name, image, typeOne,height,weight,abilities }) {
  return (
    <article className='card'>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <Link to={`/pokemon/${id}?name=${name}&image=${image}&typeOne=${typeOne}&height=${height}&weight=${weight}&abilities=${abilities}`}>
        <button className="more-info-link">Más info</button>
      </Link>
    </article>
  );
}


export default PokemonCard;






/* import React from 'react';
import { Link } from 'react-router-dom';

function PokemonCard({ id, name, image }) {
  const handleClick = () => {
    const confirmNavigation = window.confirm('¿Quieres ver más detalles de este Pokémon?');
    if (!confirmNavigation) {
      // Si el usuario cancela la navegación, detenemos la acción
      return;
    }
  };

  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${id}`} onClick={handleClick}>
        <img src={image} alt={name} />
      </Link>
    </div>
  );
}

export default PokemonCard; */

