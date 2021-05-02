import React from 'react';
import DraftListItem from './DraftListItem.jsx';
import './DraftListItem.css';

const DraftList = ({ draftedCards = [], displayCardInfo }) => {

  if (draftedCards.length === 0) {
    return (
      <div id='draft-list' ></div>
    );
  }

  return (
    <ul id='draft-list'>
      {draftedCards.map((card, index) => {
        return (
          <DraftListItem
            key={card.name}
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