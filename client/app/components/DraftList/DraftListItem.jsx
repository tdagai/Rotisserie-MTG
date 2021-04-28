import React, { useState } from 'react';
import './DraftListItem.css';

const DraftListItem = ({ cardName, cardImageSmall, index, cardImageNormal }) => {

  const styleObj = { top: `${4.5 * (index % 15)}%` };
  if (index >= 15) {
    styleObj.left = '34%';
  }
  if (index >= 30) {
    styleObj.left = '68%';
  }

  const handleMouseEnter = (e) => {
    console.log(e);
  }


  return (
    <div className='drafted-card' style={styleObj} onMouseEnter={handleMouseEnter} >
      <img src={cardImageSmall} alt={cardName} />
    </div>
  );
}

export default DraftListItem;