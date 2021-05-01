import React, { useState } from 'react';
import StashItem from './StashItem.jsx';
import './TheStash.css';

const TheStash = ({ currentTurn, myStash, setMyStash, setDisplayedCard, addCardToDraft }) => {
  const [collapseStash, setCollapseStash] = useState(false);

  const removeFromStash = (cardNameToRemove) => {
    const updatedStash = myStash.filter(({ name }) => {
      return name !== cardNameToRemove
    });
    if (updatedStash.length === 0) {
      setMyStash([]);
    } else {
      setMyStash([...updatedStash]);
    }
  }

  return (
    <div className={`app-grid-bottom-row${collapseStash ? ' collapsed' : ''}`}>
      <button
        className={`collapse-stash-btn${collapseStash ? ' collapsed-btn' : ''}`}
        onClick={() => setCollapseStash(!collapseStash)} >
        <i className="fas fa-chevron-down" />
      </button>
      <ul>
        {myStash.map((card) => (
          <StashItem
            key={card.name}
            card={card}
            currentTurn={currentTurn}
            setDisplayedCard={setDisplayedCard}
            addCardToDraft={addCardToDraft}
            removeFromStash={removeFromStash}
          />
        ))}
      </ul>
    </div>
  );
}

export default TheStash;