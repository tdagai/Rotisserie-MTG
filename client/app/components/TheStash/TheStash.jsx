import React from 'react';
import './TheStash.css';

const TheStash = ({ currentTurn, myStash, setMyStash, setDisplayedCard, addCardToDraft }) => {
  const removeFromStash = (cardNameToRemove) => {
    const updatedStash = myStash.filter(({name}) => {
      return name !== cardNameToRemove
    });
    if (updatedStash.length === 0) {
      setMyStash([]);
    } else {
      setMyStash([...updatedStash]);
    }
  }

  return (
    <div id='app-grid-bottom-row'>
      {myStash.map((card) => (
        <div
          key={card.name}
          className='stash-image-container'
          onMouseOver={() => setDisplayedCard(card)}
          onClick={() => {
            if (currentTurn) {
              addCardToDraft(card);
              removeFromStash(card.name);
            }
          }} >
            <img src={card.small} alt={card.name}></img>
        </div>
      ))}
    </div>
  );
}

export default TheStash;