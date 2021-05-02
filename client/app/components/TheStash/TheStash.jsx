import React, { useState } from 'react';
import StashItem from './StashItem.jsx';
import './TheStash.css';

const TheStash = ({ myStash, setMyStash, gridWithStash, setGridWithStash }) => {
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
        onClick={() => {
          setCollapseStash(!collapseStash);
          setGridWithStash(!gridWithStash);
        }} >
        <i className="fas fa-chevron-down" />
      </button>
      <ul className={collapseStash ? 'hide-stash-list' : 'show-stash-list'}>
        {myStash.map((card) => (
          <StashItem
            key={card.name}
            card={card}
            removeFromStash={removeFromStash}
          />
        ))}
      </ul>
    </div>
  );
}

export default TheStash;