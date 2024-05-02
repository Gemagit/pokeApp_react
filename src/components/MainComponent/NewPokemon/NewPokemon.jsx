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
      <h2>Crea tu propio Pokemon</h2>
      <form className="creaform" onSubmit={handleSubmit(onSubmit)}>
        <label>
          ID:
          <input type="number" {...register('id', { required: true })} />
        </label>
        <label>
          Nombre:
          <input type="text" {...register('name', { required: true, minLength: 3 })} />
        </label>
        <label>
          Imagen:
          <input type="text" {...register('image', { required: true })} />
        </label>
        <label>
          Tipo 1:
          <input type="select" {...register('typeOne', { required: true })} />
        </label>
        <label>
          Tipo 2:
          <input type="select" {...register('typeTwo', { required: true })} />
        </label>
        <button type="submit">Crear Pokemon</button>

        {errors.id && <span className="error-message">Introduzca una Id por favor</span>}
        {errors.name && <span className="error-message">El nombre es requerido</span>}
        {errors.name && errors.name.type === "minLength" && <span className="error-message">El nombre debe tener al menos 3 caracteres</span>}
        {errors.image && <span className="error-message">La imagen es requerida</span>}
        {errors.typeOne && <span className="error-message">Tipo 1 es requerido</span>}
      </form>

      <article>
        <ul>
          {pokemonList.map((pokemon, index) => (
            <article key={index}>
              <img src={pokemon.image} alt={pokemon.name} width={"50px"} />
              <p>{pokemon.name}</p>
              <p>{pokemon.typeOne}</p>
              <p>{pokemon.typeTwo}</p>
            </article>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default NewPokemon;
