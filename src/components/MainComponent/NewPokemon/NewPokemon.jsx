import React from "react";
import { useForm } from 'react-hook-form';
import { useState } from "react";

const NewPokemon = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [pokemonList, setPokemonList] = useState([]);

  const onSubmit = (data) => {
    setPokemonList([...pokemonList, data]);
    reset(); //resetea el formulario cuando se agrega el nuevo pokemon a la lista
  }

  return (
    <section className="creapokemon">
      <form className="creaform" onSubmit={handleSubmit(onSubmit)}>
      <h2>Crea tu propio Pokemon</h2>
        <label htmlFor="id">ID:
          <input
            id="id"
            type="number"
            {...register('id', { required: true })}
          />
        </label>

        <label htmlFor="name">
          Nombre:
          <input
            id="name"
            type="text"
            {...register('name', { required: true, minLength: 3 })}
          />
        </label>

        <label htmlFor="image">
          Imagen:
          <input
            id="image"
            type="text"
            {...register('image', { required: true })}
          />
        </label>

        <label htmlFor="typeOne">
          Tipo 1:
          <input
            id="typeOne"
            type="text"
            {...register('typeOne', { required: true })}
          />
        </label>

        <label htmlFor="typeTwo">
          Tipo 2:
          <input
            id="typeTwo"
            type="text"
            {...register('typeTwo', { required: true })}
          />
        </label>

        <button type="submit">Crear Pokemon</button>
      </form>


      {Object.keys(errors).length > 0 && (
  <article className="validacion">
    {errors.id && <span className="error-message">¡¡Introduzca una Id por favor!!</span>}
    {errors.name && <span className="error-message">El nombre es requerido</span>}
    {errors.name && errors.name.type === "minLength" && <span className="error-message">El nombre debe tener al menos 3 caracteres</span>}
    {errors.image && <span className="error-message">La imagen es requerida</span>}
    {errors.typeOne && <span className="error-message">Tipo 1 es requerido</span>}
    {errors.typeTwo && <span className="error-message">Tipo 2 es requerido</span>}
  </article>
)}



      {pokemonList.map((pokemon, index) => (
        <article className="newcard" key={index}>
          <img src={pokemon.image} alt={pokemon.name} width={"50px"} />
          <p>{pokemon.name}</p>
          <p>{pokemon.typeOne}</p>
          <p>{pokemon.typeTwo}</p>
        </article>
      ))}
    </section>
  );
};

export default NewPokemon;
