import React, { useState, useContext } from 'react';
import { SearchContext } from '../../../Contexts/Contexts.js';
import './SearchListItem.css';

const SearchListItem = ({ card }) => {
  const { addCardToDraft, addCardToStash, currentTurn } = useContext(SearchContext);

  return (
    <li>
      <div
        className='search-item'
        onMouseDown={(e) => {
          e.preventDefault();
          if (currentTurn) {
            addCardToDraft(card);
          } else {
            addCardToStash(card)
          }
        }}
      >
        {card.searchName}
      </div>
    </li>
  );
}

export default SearchListItem;