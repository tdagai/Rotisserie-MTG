import React, { useState, useEffect } from 'react';
import DraftListItem from './DraftListItem.jsx';
import './DraftList.css';

const DraftList = ({ allUsers, setDisplayedCard, me }) => {
  const [listIndex, setListIndex] = useState(0);
  const [currentPlayerName, setCurrentPlayerName] = useState('');

  useEffect(() => {
    setCurrentPlayerName(Object.keys(allUsers)[0]);
  }, [allUsers]);

  const handleNext = () => {
    const playerNames = Object.keys(allUsers);
    if (listIndex < playerNames.length - 1) {
      setCurrentPlayerName(playerNames[listIndex + 1]);
      setListIndex(listIndex + 1);
    }
  }

  const handleBack = () => {
    const playerNames = Object.keys(allUsers);
    if (listIndex > 0) {
      setCurrentPlayerName(playerNames[listIndex - 1]);
      setListIndex(listIndex - 1);
    }
  }

  // 25vw + 250px:  offset the margin
  // 6px:           account for borders (3px on each side)
  // listIndex:     indicate which list to show
  // -1:            to rotate the list in the correct direction
  const styleObj = { left: `calc((25vw + 250px + 6px) * ${listIndex} * -1)`, transition: 'left .5s' };

  if (!Object.keys(allUsers)[0]) {
    return (
      <div className='app-grid-top-row-left-col'>
        <img id='draft-page-preload' src='https://i.imgur.com/qlSBso9.gif' alt='loading gif'></img>
      </div>
    )
  }

  return (
    <div className='app-grid-top-row-left-col'>
      <button
        id='draft-carousel-back'
        onClick={handleBack} >{'<'}</button>
      <span id='player-name' >{currentPlayerName}</span>
      {Object.keys(allUsers).map((userID) => (
        <ul
          key={userID}
          className='draft-list'
          style={styleObj} >
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
      <button
        id='draft-carousel-next'
        onClick={handleNext} >{'>'}</button>
    </div>
  );
}

export default DraftList;