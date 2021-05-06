import React from 'react';
import DraftListItem from './DraftListItem.jsx';
import './DraftList.css';

const DraftList = ({ draftedCards = [], displayCardInfo }) => {

  if (draftedCards.length === 0) {
    return (
      <div className='draft-list' ></div>
    );
  }

  return (
    <ul className='draft-list'>
      {draftedCards.map((card, index) => {
        return (
          <DraftListItem
            key={card.ff.name}
            card={card}
            index={index}
            displayCardInfo={displayCardInfo}
          />
        );
      })}
    </ul>
  );
}

export default DraftList;