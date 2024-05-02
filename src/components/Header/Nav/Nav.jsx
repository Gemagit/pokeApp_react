import React from "react";
import { Link } from 'react-router-dom'
import burgerIcon from "../../../assets/burger-icon.png";
import bolaIcon from "../../../assets/icono_bola.png"

const Nav = () => {
  return <nav className="nav">
    <input type="checkbox" id="menu" />
    <label for="menu"><img src={`${burgerIcon}`} alt="burger" width="24px" /></label>
    <img src={`${bolaIcon}`} alt="iconbola" width="24px" />
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/pokemon:id'>Details</Link></li>
      <li><Link to='/new'>Create a Pokemon</Link></li>
    </ul>
  </nav>;
};

export default Nav;
