import React from 'react';
import DraftListItem from './DraftListItem.jsx';
import './DraftListItem.css';

const DraftList = ({ draftedCards }) => {

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
            cardName={card.name}
            cardImage={card.small}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default DraftList;