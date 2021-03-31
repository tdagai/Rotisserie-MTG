import React from 'react';
import DraftListItem from './DraftListItem.jsx';
import './DraftListItem.css';

const DraftList = ({ draftedCards }) => {

  if (draftedCards.length === 0) {
    return (
      <div className='empty-list' ></div>
    );
  }


  return (
    <div id='draft-list'>
      {draftedCards.map((card, index) => {
        return (
          <DraftListItem
            key={index}
            cardName={card[index].name}
            cardImage={card[index].small}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default DraftList;