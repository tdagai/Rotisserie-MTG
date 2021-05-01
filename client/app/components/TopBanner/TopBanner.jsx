import React from 'react';
import Search from './Search/Search.jsx';
import './TopBanner.css';

const TopBanner = ({ setCurrentTurn, currentTurn }) => {
  return (
    <div id='banner-container'>
      <h1 id='app-title'>Rotisserie MTG</h1>
      {/* THIS BUTTON IS FOR DEVELOPMENT ONLY AND WILL BE REMOVED ONCE THE TURN SYSTEM WILL BE IMPELEMNTED */}
      <div id='turn-changer'>
        <button  onClick={() => { setCurrentTurn(!currentTurn) }} >change turn</button>
        <span>{`${currentTurn}`}</span>
      </div>
      {/* THIS BUTTON IS FOR DEVELOPMENT ONLY AND WILL BE REMOVED ONCE THE TURN SYSTEM WILL BE IMPELEMNTED */}
      <Search currentTurn={currentTurn} />
    </div>
  );
}

export default TopBanner;