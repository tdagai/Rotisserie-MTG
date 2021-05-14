import React, { useState } from 'react';
import StashItem from './StashItem.jsx';
import './TheStash.css';

const TheStash = ({ myStash, gridWithStash, setGridWithStash }) => {
  const [collapseStash, setCollapseStash] = useState(false);

  // console.log(document.getElementById('stash-list')?.clientWidth);

  return (
    <div className={`app-grid-bottom-row${collapseStash ? ' collapsed' : ''}`}>
      <button
        aria-label='collapse stash button'
        className={`button-style collapse-stash-btn${collapseStash ? ' collapsed-btn' : ''}`}
        onClick={() => {
          setCollapseStash(!collapseStash);
          setGridWithStash(!gridWithStash);
        }} >
        <i className="fas fa-chevron-down" />
      </button>
      {
        !collapseStash &&
        <button
          id='stash-back-button'
          className='button-style stash-carousel-button' >
          <i className="fas fa-caret-left"></i>
        </button>
      }
      <ul
        id='stash-list'
        className={collapseStash ? 'hide-stash-list' : 'show-stash-list'}>
        {myStash.map((card) => (
          <StashItem
            key={card.ff.name}
            collapsed={collapseStash}
            card={card} />
        ))}
      </ul>
      {
        !collapseStash &&
        <button
          id='stash-next-button'
          className='button-style stash-carousel-button'>
          <i className="fas fa-caret-right"></i>
        </button>
      }
    </div>
  );
}

export default TheStash;
