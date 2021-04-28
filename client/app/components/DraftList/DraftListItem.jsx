import React, { useState } from 'react';
import './DraftListItem.css';

const DraftListItem = ({ cardName, cardImageSmall, index, cardImageNormal, displayCardInfo }) => {

  const styleObj = { top: `${4.5 * (index % 15)}%` };
  if (index >= 15) {
    styleObj.left = '34%';
  }
  if (index >= 30) {
    styleObj.left = '68%';
  }

  return (
    <div className='drafted-card' style={styleObj} onMouseEnter={() => displayCardInfo(cardImageNormal)} >
      <img src={cardImageSmall} alt={cardName} />
    </div>
  );
}

export default DraftListItem;