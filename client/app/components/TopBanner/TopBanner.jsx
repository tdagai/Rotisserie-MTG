import React from 'react';
import Search from './Search/Search.jsx';
import './TopBanner.css';

const TopBanner = ({ addCardToDraft }) => {
  return (
    <div id='banner-container'>
      <h1 id='app-title'>Rotisserie MTG</h1>
      <Search addCardToDraft={addCardToDraft} />
    </div>
  );
}

export default TopBanner;