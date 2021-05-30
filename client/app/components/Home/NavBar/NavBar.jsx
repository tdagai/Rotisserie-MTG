import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav id='homepage-navbar' >
      <ul>
        <li>
          <h1 id='homepage-title' className='app-title-style' >
            <Link to='/' className='homepage-link-style' >
              Rotisserie MTG
            </Link>
          </h1>
        </li>
        <li className='homepage-nav-item' >
          <Link to='/contact' className='homepage-link-style' >
            Contact
          </Link>
        </li>
        <li className='homepage-nav-item' >
          <Link to='/about' className='homepage-link-style' >
            About
          </Link>
        </li>
        <li className='homepage-nav-item' >
          <Link to='/draft-page' className='homepage-link-style' >
            Sandbox
          </Link>
        </li>
        <li className='homepage-nav-item' >
          <Link to='/join-room' className='homepage-link-style' >
            Join Room
          </Link>
        </li>
        <li className='homepage-nav-item' >
          <Link to='/create-new-room' className='homepage-link-style' >
            Create New Room
          </Link>
        </li>
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