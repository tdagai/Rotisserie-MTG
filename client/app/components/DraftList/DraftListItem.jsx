import React from 'react';
import './DraftListItem.css';

const DraftListItem = ({ cardName, cardImage, index }) => {
  return (
    <div className='drafted-card' style={{ top: `${4.5 * index}%` }} >
      <img src={cardImage} alt={cardName} />
    </div>
  );
}

export default DraftListItem;