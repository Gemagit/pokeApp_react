import React from "react";
import { Link } from 'react-router-dom'
import burgerIcon from "../../../assets/burger-icon.png";

const Nav = () => {
  return <nav className="nav">
    <label for="menu"><img src={`${burgerIcon}`} alt="burger" width="24px" /></label>
    <ul>
      <li><Link className="letrasnav"to='/'>Home</Link></li>
      <li><Link className="letrasnav"to='/pokemon:id'>Details</Link></li>
      <li><Link className="letrasnav"to='/new'>Create a Pokemon</Link></li>
    </ul>
  </nav>;
};

export default Nav;
