import React, { useState, useEffect } from 'react';
import StashItem from './StashItem.jsx';
import './TheStash.css';

const TheStash = ({ myStash, gridWithStash, setGridWithStash }) => {
  const [collapseStash, setCollapseStash] = useState(false);
  const [displayedStash, setDisplayedStash] = useState([]);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    if (myStash) {
      if (myStash.length <= 10) {
        setDisplayedStash(myStash);
      } else {
        setDisplayedStash(myStash.slice(10 * carouselIndex, (10 * carouselIndex) + 10));
      }
    }
  }, [myStash]);

  useEffect(() => {
    if (myStash) {
      setDisplayedStash(myStash.slice(10 * carouselIndex, (10 * carouselIndex) + 10));
    }
  }, [carouselIndex])

  const handleNext = (e) => {
    e.preventDefault();
    if (carouselIndex < (Math.floor((myStash.length - 1) / 10)) && carouselIndex <= 2) {
      setCarouselIndex(carouselIndex + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    }
  };

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
          className={`${!carouselIndex ? 'disabled-' : ''}button-style stash-carousel-button`}
          disabled={!carouselIndex}
          onClick={handleBack} >
          <i className="fas fa-caret-left"></i>
        </button>
      }
      <ul
        id='stash-list'
        className={collapseStash ? 'hide-stash-list' : 'show-stash-list'}>
        {displayedStash.map((card) => (
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
          className={`stash-carousel-button
          ${carouselIndex === (Math.floor((myStash.length - 1) / 10)) || myStash.length === 0 ? 'disabled-' : ''}button-style`}
          onClick={handleNext} >
          <i className="fas fa-caret-right"></i>
        </button>
      }
    </div>
  );
}

export default TheStash;
