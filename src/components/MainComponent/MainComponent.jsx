import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import SearchPokemon from "./SearchPokemon";
import ListaPokemon from "./ListaPokemon";
import DetailsPokemon from './DetailsPokemon';
import NewPokemon from "./NewPokemon";

function MainComponent({pokemonList, setPokemonList}) {
  
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<SearchPokemon pokemonList={pokemonList} setPokemonList={setPokemonList}/>} />
        <Route path="*" element={<SearchPokemon setPokemonList={setPokemonList} />}/>
        <Route path="/pokemon/:id" element={<DetailsPokemon />} />
        <Route path="/new" element={<NewPokemon/>} /> 
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
      <ListaPokemon pokemonList={pokemonList} />

    </main>
  );
}

export default MainComponent;
