import React, { useContext } from 'react';
import { stashContext } from '../../Contexts/Contexts';

const StashItem = ({ card, removeFromStash }) => {
  const cursorStyle = {cursor: currentTurn ? 'pointer' : 'default'}
  const { currentTurn, setDisplayedCard, addCardToDraft } = useContext(stashContext);

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