import './App.css'
import "./styles/styles.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { PokemonContext } from './context/PokemonContext';
import {useState} from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";


function App() {
  const [pokemonList, setPokemonList]= useState([]);//aquí voy a almacenar la lista de los pokemons


  return (
    <>
    <Router>
    <PokemonContext.Provider value={{ pokemonList, setPokemonList }}>
      <Header />
      <MainComponent/>
      <Footer />
      </PokemonContext.Provider>
      </Router>
    </>
  )
}

export default App
