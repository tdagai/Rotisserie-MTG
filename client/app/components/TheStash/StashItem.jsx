import React from 'react';

const StashItem = ({ card, currentTurn, setDisplayedCard, addCardToDraft, removeFromStash }) => {
  const cursorStyle = {cursor: currentTurn ? 'pointer' : 'default'}

  return (
    <li
    style={cursorStyle}
      className='stash-image-container'
      onMouseOver={() => setDisplayedCard(card)}
      onClick={(e) => {
        e.preventDefault();
        if (currentTurn) {
          addCardToDraft(card);
          removeFromStash(card.name);
        }
      }} >
      <img src={card.small} alt={card.name}></img>
    </li>
  )
};

export default StashItem;