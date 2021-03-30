import React, { useState } from 'react';
import './SearchListItem.css';

const SearchListItem = ({ cardName, cardImage }) => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <>
      <div
      className='search-item'
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      >{cardName}</div>
      <div className={hoverState ? 'floating-image-container' : 'invisible'} >
        <img src={cardImage} alt={cardName} />
      </div>
    </>
  );
}

export default SearchListItem;