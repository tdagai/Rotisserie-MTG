import React, { useState } from 'react';
import './SearchListItem.css';

const SearchListItem = ({ card, addCardToDraft, setDisplaySearch }) => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <>
      <div
        className='search-item'
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
  onClick={() => { addCardToDraft(card); /*setDisplaySearch(false)*/ }}
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