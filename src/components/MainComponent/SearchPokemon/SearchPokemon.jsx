import React, { useState, useEffect, useRef } from 'react';
import PokemonCard from "./PokemonCard"

const SearchPokemon = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const fetchPokemons = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
        const data = await response.json();
        // simular retardo de llamada a API
        await new Promise((resolve, reject) => setTimeout(resolve, 2000));
        setFilteredPokemons([data]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener el Pokémon:', error);
        setFilteredPokemons([]);
        setIsLoading(false);
      }
    };
    fetchPokemons();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input 
          ref={inputRef} 
          placeholder="Busca tu Pokémon por nombre" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          {filteredPokemons.length > 0 ? (
            <div>
              <h3>{filteredPokemons[0].name}</h3>
              <PokemonCard
                name={filteredPokemons[0].name}
                imageURL={filteredPokemons[0].sprites.front_default}
              />
            </div>
          ) :
            <p>No se encontró ningún Pokémon con ese nombre.</p>
          }
        </div>
      )}
    </section>
  );
};

export default SearchPokemon;


/* import React, { useState, useRef, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import axios from "axios";

const WeatherList = () => {
  // Cambiar el "Madrid" por la geolocalización
  const [value, setValue] = useState(""); // Para guardar el dato a buscar
  const [weatherFetch, setweatherFetch] = useState([]); // Para guardar los weatherFetch
  const [cityName, setCityName] = useState(); // Para el nombre de la ciudad buscada
  const inputRef = useRef();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function getGeolocation(position) {
      try {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude
        // Petición HTTP
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
        const json = res.data.list;
        setCityName(res.data.city.name) //Nombre de la ciudad por defecto

        // Guarda en el array de weatherFetch el resultado. Procesa los datos
        setweatherFetch(json);
      } catch (e) {
        setweatherFetch([]) // No pintes nada 
      }
    })

  }, [])

  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try {
        // Petición HTTP
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
        const json = res.data.list;
        setCityName(res.data.city.name)

        // Guarda en el array de weatherFetch el resultado. Procesa los datos
        setweatherFetch(json);
      } catch (e) {
        setweatherFetch([]) // No pintes nada 
      }
    }

    fetchData();
  }, [value]); // componentDidUpdate

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(inputRef.current.value) // Modificando el estado de Value
  };

  const paintCards = () => weatherFetch.map((forecast, index) => <WeatherCard
    key={index}
    date={forecast.dt_txt}
    temp={Math.round(forecast.main.temp)}
    weather={forecast.weather[0].main}
    icon={forecast.weather[0].icon}
  />);


  return <section>
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} placeholder="Ciudad" />
      <button>Buscar</button>
    </form>
    <h3>{cityName}</h3>
    {paintCards()}
  </section>
};

export default WeatherList; */