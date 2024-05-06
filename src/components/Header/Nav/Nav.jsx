import React, { useState } from "react";
import { Link } from 'react-router-dom';
//import iconoBola from "/Volumes/fullstack_thebridge/curso_fullstack/REACT/react_web/pokeApp_react/src/assets/icono_bola.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <label htmlFor="menu" onClick={toggleMenu}>{/* <img src={iconoBola} alt="bola" width={"50px"} /> */}</label>
      <input type="checkbox" id="menu" checked={menuOpen} readOnly />
      <ul className={menuOpen ? "menu-open" : ""} onClick={closeMenu}>
        <li><Link className="letrasnav" to='/'>Home</Link></li>
        <li><Link className="letrasnav" to='/new'>Create a Pokemon</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;

