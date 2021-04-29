import React, { useState } from 'react';
import './SearchListItem.css';

const SearchListItem = ({ card, addCardToDraft, currentTurn, addCardToStash }) => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <>
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
    </>
  );
}

export default SearchListItem;