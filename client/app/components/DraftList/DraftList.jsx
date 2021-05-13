import React, { useState, useEffect } from 'react';
import DraftListItem from './DraftListItem.jsx';
import './DraftList.css';

const DraftList = ({ allUsers, setDisplayedCard, me }) => {
  const [listIndex, setListIndex] = useState(0);
  const [allPlayerNames, setAllPlayerNames] = useState([])
  const [currentPlayerName, setCurrentPlayerName] = useState('');

  useEffect(() => {
    setAllPlayerNames(Object.keys(allUsers));
    setCurrentPlayerName(Object.keys(allUsers)[0]);
  }, [allUsers]);

  useEffect(() => {
    setAllPlayerNames(Object.keys(allUsers));
  }, [Object.keys(allUsers).length]);

  const handleNext = () => {
    if (listIndex < allPlayerNames.length - 1) {
      setCurrentPlayerName(allPlayerNames[listIndex + 1]);
      setListIndex(listIndex + 1);
    } else if (listIndex === allPlayerNames.length - 1) {
      setCurrentPlayerName(allPlayerNames[0]);
      setListIndex(0);
    }
  }

  const handleBack = () => {
    if (listIndex > 0) {
      setCurrentPlayerName(allPlayerNames[listIndex - 1]);
      setListIndex(listIndex - 1);
    } else if (listIndex === 0) {
      setCurrentPlayerName(allPlayerNames[allPlayerNames.length - 1]);
      setListIndex(allPlayerNames.length - 1);
    }
  }

  // 25vw + 250px:  offset the margin
  // 6px:           account for borders (3px on each side)
  // listIndex:     indicate which list to show
  // -1:            to rotate the list in the correct direction
  const styleObj = {
    left: `calc((25vw + 250px + 6px) * ${listIndex} * -1)`,
    transition: 'left .5s',
    '-webkit-transition': 'left .5s'
  };

  if (!Object.keys(allUsers)[0]) {
    return (
      <div className='app-grid-top-row-left-col'>
        <img id='draft-page-preload' src='https://i.imgur.com/TiPDsSa.gif' alt='loading gif'></img>
      </div>
    )
  }

  return (
    <div className='app-grid-top-row-left-col'>
      <button
        aria-label='draft carousel back button'
        id='draft-carousel-back'
        className='button-style'
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
        aria-label='draft carousel next button'
        id='draft-carousel-next'
        className='button-style'
        onClick={handleNext} >{'>'}</button>
    </div>
  );
}

export default DraftList;