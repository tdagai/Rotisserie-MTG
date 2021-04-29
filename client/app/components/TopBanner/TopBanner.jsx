import React from 'react';
import Search from './Search/Search.jsx';
import './TopBanner.css';

const TopBanner = ({ addCardToDraft, setCurrentTurn, currentTurn, addCardToStash }) => {
  return (
    <div id='banner-container'>
      <h1 id='app-title'>Rotisserie MTG</h1>
      <div id='turn-changer'>
        <button  onClick={() => { setCurrentTurn(!currentTurn) }} >change turn</button>
        <span>{`${currentTurn}`}</span>
      </div>
      <Search addCardToDraft={addCardToDraft} currentTurn={currentTurn} addCardToStash={addCardToStash} />
    </div>
  );
}

export default TopBanner;