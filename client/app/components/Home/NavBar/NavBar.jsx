import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav id='homepage-navbar' >
      <ul>
        <li>
          <h1 id='homepage-title' className='app-title-style' >Rotisserie MTG</h1>
        </li>
        <li className='homepage-nav-item' >About</li>
        <li className='homepage-nav-item' >
          <Link to='/draft-page' className='homepage-link-style' >
            Sandbox
          </Link>
        </li>
        <li className='homepage-nav-item' >Join Room</li>
        <li className='homepage-nav-item' >Create New Room</li>
        <li className='homepage-nav-item' >
          <Link to='/signin' className='homepage-link-style' >
            Sign In
        </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;