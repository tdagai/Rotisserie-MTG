import React, { useState, useContext } from 'react';
import { FloatingCardContext, SearchContext } from '../../../Contexts/Contexts.js';
import './SearchListItem.css';

const SearchListItem = ({ card }) => {
  const { addCardToDraft, addCardToStash, currentTurn } = useContext(SearchContext);
  const { hoveredCard, setHoveredCard } = useContext(FloatingCardContext);

  return (
    <li>
      <div
        className='search-item'
        onMouseOver={() => {
          if (hoveredCard.name !== card.ff.name) {
            setHoveredCard({ name: card.ff.name, image: card.ff.small });
          }
        }}
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