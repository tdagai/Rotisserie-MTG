import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search/Search.jsx';
import { FloatingCardContext, SearchContext } from '../../../Contexts/Contexts.js';
import './TopBanner.css';

const TopBanner = ({ setCurrentTurn }) => {
  const [hoveredCard, setHoveredCard] = useState({});
  const [hoverState, setHoverState] = useState(false);
  const { currentTurn } = useContext(SearchContext);

  return (
    <nav id='banner-container'>
      <h1 id='draft-page-app-title' className='app-title-style' >
        <Link to='/' id='draftpage-link' >
          Rotisserie MTG
        </Link>
      </h1>
      {/* THIS BUTTON IS FOR DEVELOPMENT ONLY AND WILL BE REMOVED ONCE THE TURN SYSTEM WILL BE IMPELEMNTED */}
      <div id='turn-changer'>
        <button
          className='button-style'
          aria-label='change turn button'
          onClick={() => {
            setCurrentTurn(!currentTurn)
          }} >change turn</button>
        <span>{`${currentTurn}`}</span>
      </div>
      {/* THIS BUTTON IS FOR DEVELOPMENT ONLY AND WILL BE REMOVED ONCE THE TURN SYSTEM WILL BE IMPELEMNTED */}
      {
        hoverState &&
        <div id='floating-card-container' >
          <img src={hoveredCard?.image} alt={hoveredCard?.name} ></img>
        </div>
      }
      <FloatingCardContext.Provider value={{ setHoverState, hoveredCard, setHoveredCard }}  >
        <Search />
      </FloatingCardContext.Provider>
    </nav>
  );
}

export default TopBanner;