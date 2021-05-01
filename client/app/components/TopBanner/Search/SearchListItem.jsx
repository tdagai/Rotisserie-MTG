import React, { useState, useContext } from 'react';
import { SearchContext } from '../../../Contexts/Contexts.js';
import './SearchListItem.css';

const SearchListItem = ({ card, currentTurn }) => {
  const [hoverState, setHoverState] = useState(false);
  const { addCardToDraft, addCardToStash } = useContext(SearchContext);

  return (
    <li>
      <div
        className='search-item'
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
        onMouseDown={(e) => {
          e.preventDefault();
          if (currentTurn) {
            addCardToDraft(card);
          } else {
            addCardToStash(card)
          }
        }}
      >
        {card.name}
      </div>
      <div className={hoverState ? 'floating-image-container' : 'invisible'} >
        <img src={card.small} alt={card.name} />
      </div>
    </li>
  );
}

export default SearchListItem;