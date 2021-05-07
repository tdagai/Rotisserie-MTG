import React from 'react';
import DraftListItem from './DraftListItem.jsx';
import './DraftList.css';

const DraftList = ({ allUsers, setDisplayedCard }) => {

  return (
    <div id='app-grid-top-row-left-col'>
      {Object.keys(allUsers).map((userID) => (
        <ul key={userID} className='draft-list'>
          {allUsers[userID].map((card, index) => {
            return (
              <DraftListItem
                key={card.ff.name}
                card={card}
                index={index}
                setDisplayedCard={setDisplayedCard}
              />
            );
          })}
        </ul>
      ))}
    </div>
  );
}

export default DraftList;