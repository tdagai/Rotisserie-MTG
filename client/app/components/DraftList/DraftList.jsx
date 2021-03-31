import React from 'react';
import DraftListItem from './DraftListItem.jsx';
import './DraftListItem.css';

const DraftList = ({ draftedCards }) => {

  if (draftedCards.length === 0) {
    return (
      <div className='empty-list' ></div>
    );
  }


  console.log('draftedCards:', draftedCards);

  return (
    <div id='draft-list'>
      {draftedCards.map((card, index) => {
        console.log('card:', card);
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