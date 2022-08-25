import React from 'react';
import '../style.css';
//Images
import earthIcon from "../images/earth-icon.svg"

function Navbar() {
  return (
    <nav className='nav'>
        <img src={earthIcon}/>
        <h1>my travel journal.</h1>
    </nav>
  );
}

export default Navbar;