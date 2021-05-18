import React, { useState, useContext } from 'react';
import { stashContext } from '../../../Contexts/Contexts.js';
import './StashItem.css';

const StashItem = ({ card, collapsed }) => {
  const [showButtons, toggleButtons] = useState(false);
  const { currentTurn, setDisplayedCard, addCardToDraft, removeFromStash } = useContext(stashContext);

  const cursorStyle = { cursor: currentTurn ? 'pointer' : 'default' }

  return (
    <li
      style={cursorStyle}
      className='stash-image-container'
      onMouseOver={() => {if (!collapsed){ setDisplayedCard(card) }}}
      onClick={(e) => {
        e.preventDefault();
        toggleButtons(!showButtons);
      }} >
      {
        currentTurn && showButtons && !collapsed &&
        <button
          aria-label='Add To Draft Button'
          className='stash-add-to-draft'
          onClick={(e) => {
            e.preventDefault();
            addCardToDraft(card);
            removeFromStash(card.ff.name);
          }}
        >
        {'+'}
        </button>
      }
      {
        showButtons && !collapsed &&
        <button
          aria-label='Remove From Stash Button'
          className='stash-remove-from-stash'
          onClick={(e) => {
            e.preventDefault();
            removeFromStash(card.ff.name);
          }}
        >
        {'x'}
        </button>
      }
      <img src={card.ff.small} alt={card.ff.name}></img>
    </li>
  )
};

export default StashItem;
