//import { useState } from 'react'
import './App.css'
import "./styles/styles.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";


function App() {


  return (
    <>
    <BrowserRouter>
      <Header />
      <MainComponent />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
