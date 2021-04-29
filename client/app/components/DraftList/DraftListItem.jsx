import React, { useState } from 'react';
import './DraftListItem.css';

const DraftListItem = ({ card, index, displayCardInfo }) => {

  const styleObj = { top: `${4.5 * (index % 15)}%` };
  if (index >= 15) {
    styleObj.left = '34%';
  }
  if (index >= 30) {
    styleObj.left = '68%';
  }

  return (
    <div className='drafted-card' style={styleObj} onMouseEnter={() => displayCardInfo(card)} >
      <img src={card.small} alt={card.name} />
    </div>
  );
}

export default DraftListItem;