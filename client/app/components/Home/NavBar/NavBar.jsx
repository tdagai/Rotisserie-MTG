import React, { useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [mobileNavHidden, toggleMobileNav] = useState(true);
  const smallerThan1075 = useMediaPredicate("(max-width: 1075px)");

  const handleMenuButtonClick = (e) => {
    e.preventDefault();
    toggleMobileNav(!mobileNavHidden);
  }

  if (smallerThan1075) {
    return (
      <div id='homepage-navbar' >
        <ul className='top-bar-list' >
          <li id='homepage-title-container'>
            <h1 id='homepage-title' className='app-title-style' >
              <Link to='/' /*className='homepage-link-style'*/ >
                Rotisserie MTG
            </Link>
            </h1>
          </li>
          <li id='menu-btn-container' >
            <button
              type='button'
              className='nav-menu-btn'
              aria-label='hamburger navigation menu'
              onClick={handleMenuButtonClick} >
              <i className="fas fa-bars"></i>
            </button>
          </li>
        </ul>
        <ul id='homepage-mobile-nav-list' className={mobileNavHidden ? 'hide-nav-list' : 'show-nav-list'} >
          <Link to='/signin' className='homepage-link-style' >
            <li className='homepage-nav-item' >
              Sign In
            </li>
          </Link>
          <Link to='/create-new-room' className='homepage-link-style' >
            <li className='homepage-nav-item' >
              Create New Room
            </li>
          </Link>
          <Link to='/join-room' className='homepage-link-style' >
            <li className='homepage-nav-item' >
              Join Room
            </li>
          </Link>
          <Link to='/draft-page' className='homepage-link-style' >
            <li className='homepage-nav-item' >
              Sandbox
            </li>
          </Link>
          <Link to='/about' className='homepage-link-style' >
            <li className='homepage-nav-item' >
              About
            </li>
          </Link>
          <Link to='/contact' className='homepage-link-style' >
            <li className='homepage-nav-item' >
              Contact
            </li>
          </Link>
        </ul>
      </div>

    );
  }

  return (
    <nav id='homepage-navbar' >
      <ul className='top-bar-list' >
        <li id='homepage-title-container' >
          <h1 id='homepage-title' className='app-title-style' >
            <Link to='/' /*className='homepage-link-style'*/ >
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