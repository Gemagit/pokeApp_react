import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import SearchPokemon from "./SearchPokemon";
import PokemonCard from "./SearchPokemon/PokemonCard";
import NewPokemon from "./NewPokemon";

function MainComponent() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<SearchPokemon/>} />
        <Route path='/pokemon:id' element={<PokemonCard/>} />
        <Route path="/new" element={<NewPokemon/>} /> 
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </main>
  );
}

export default MainComponent;
