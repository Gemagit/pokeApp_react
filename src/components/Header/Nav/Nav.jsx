import React from "react";
import { Link } from 'react-router-dom'
//import burgerIcon from "../../../assets/burger-icon.png";
import iconoBola from "/Volumes/fullstack_thebridge/curso_fullstack/REACT/react_web/pokeApp_react/src/assets/icono_bola.png"

const Nav = () => {
  return <nav className="nav">
    <label for="menu"><img src={`${iconoBola}`} alt="bola" width={"50px"}/></label>
    <ul>
      <li><Link className="letrasnav"to='/'>Home</Link></li>
      <li><Link className="letrasnav"to='/new'>Create a Pokemon</Link></li>
    </ul>
  </nav>;
};

export default Nav;
