import React, { useState, useEffect, useContext } from 'react';
import { PokemonContext } from "../../../context/PokemonContext";
import debounce from 'lodash.debounce';
import ListaPokemon from '../ListaPokemon';

function SearchPokemon() {
  const { setPokemonList } = useContext(PokemonContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const debouncedSearchPokemon = debounce(searchPokemon, 3000);
    if (searchTerm.trim()) {
      debouncedSearchPokemon();
    }
    return () => {
      debouncedSearchPokemon.cancel();
    };
  }, [searchTerm]);

  const searchPokemon = async () => {
    try {
      setIsLoading(true); // Marcar como cargando mientras se realiza la búsqueda

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      const data = await response.json();

      setPokemonList(prevList => [...prevList, {id: data.id, name: data.name, image: data.sprites.front_default }]);
      setSearchTerm(''); // Vaciar el input después de la búsqueda del Pokémon
    } catch (error) {
      console.error('Error searching pokemon:', error);
    } finally {
      setIsLoading(false); // Marcar como no cargando cuando la búsqueda ha terminado
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm('');
  }

  return (
    <section className='sectionsearch'>
      <form className="search" onSubmit={handleSubmit}>
        <h2>Encuentra un Pokemon</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Buscar Pokemon"
        />
        <button type="submit">Buscar</button>
      </form>
      <ListaPokemon searchTerm={searchTerm} />
    </section>
  );
}

export default SearchPokemon;




/* import React, { useState, useEffect, useContext } from 'react';
import { PokemonContext } from "../../../context/PokemonContext";
import debounce from 'lodash.debounce';
import ListaPokemon from '../ListaPokemon/ListaPokemon';

function SearchPokemon() {
  const { setPokemonList } = useContext(PokemonContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [foundPokemon, setFoundPokemon] = useState(null);

  useEffect(() => {
    const searchPokemon = async () => {
      if (!searchTerm.trim()) return;

      try {
        setIsLoading(true); // Marcar como cargando mientras se realiza la búsqueda

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
        const data = await response.json();

        setFoundPokemon({ name: data.name, image: data.sprites.front_default }); // Almacenar el Pokemon encontrado
        setPokemonList(prevList => [...prevList, {id: data.id, name: data.name, image: data.sprites.front_default }]);
        setSearchTerm(''); // Vacia el input después de la búsqueda del pokemon
      } catch (error) {
        console.error('Error searching pokemon:', error);
      } finally {
        setIsLoading(false); // Marcar como no cargando cuando la búsqueda ha terminado
      }
    };

    const debouncedSearchPokemon = debounce(searchPokemon, 1500);
    debouncedSearchPokemon();

    return () => {
      debouncedSearchPokemon.cancel();
    };
  }, [searchTerm, setPokemonList]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchPokemon();
    setSearchTerm('');
  }

  return (
    <section className='sectionsearch'>
      <form className="search" onSubmit={handleSubmit}>
        <h2>Encuentra un Pokemon</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Buscar Pokemon"
        />
        <button type="submit">Buscar</button>
      </form>
      {isLoading ? (
        <p>Cargando...</p>
      ) : foundPokemon ? (
        <article>
          <div>
            <h3>{foundPokemon.name}</h3>
            <p>{foundPokemon.id}</p>
            <img src={foundPokemon.image} alt={foundPokemon.name} />
            <button className="more-info-link">Más info</button>
          </div>
        </article> 
      ) : 
          <p>No se encontró ningún Pokémon con ese nombre.</p>
      }
    </section>
  );
}

export default SearchPokemon; */
 