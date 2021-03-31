import React from 'react';
import './DraftListItem.css';

const DraftListItem = ({ cardName, cardImage, index }) => {
  const styleObj = { top: `${4.5 * (index % 15)}%` };
  if (index >= 15) {
    styleObj.left = '34%';
  }
  if (index >= 30) {
    styleObj.left = '68%';
  }
  return (
    <div className='drafted-card' style={styleObj} >
      <img src={cardImage} alt={cardName} />
    </div>
  );
}

export default DraftListItem;