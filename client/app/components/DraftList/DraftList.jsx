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
    <div id='draft-list'>
      {draftedCards.map((card, index) => {
        return (
          <DraftListItem
            key={index}
            card={card}
            // cardName={card.name}
            // cardImageSmall={card.small}
            // cardImageNormal={card.normal}
            index={index}
            displayCardInfo={displayCardInfo}
          />
        );
      })}
    </div>
  );
}

export default DraftList;