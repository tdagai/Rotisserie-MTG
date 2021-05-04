import React, { useContext } from 'react';
import { stashContext } from '../../Contexts/Contexts.js';
import './StashItem.css';

const StashItem = ({ card }) => {
  const { currentTurn, setDisplayedCard, addCardToDraft, removeFromStash } = useContext(stashContext);
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
          removeFromStash(card.ff.name);
        }
      }} >
      <img src={card.ff.small} alt={card.ff.name}></img>
    </li>
  )
};

export default StashItem;
