import React, { useState } from 'react';
import RulesCarouselItem from './RulesCarouselItem.jsx';
import PositionIndicator from '../../../Home/HeroCarousel/PositionIndicator/PositionIndicator.jsx';
import './RulesCarousel.css'

const RulesCarousel = () => {
  const [positionIndex, setPositionIndex] = useState(0);

  const rules = [
    'Players draft cards in a snaking fashion (so if there are 6 players drafting, it will go from 1 to 6 and then from 6 to 1, which means the players at the edges get to draft twice in a row).',
    'Players may draft any card that is legal in the Vintage MTG format.',
    'There can only be one copy of a card drafted amongst all players (so if Timmy drafted Black Lotus, no one else can).\nBecause of that, all drafted cards will be publicly known to all players.',
    'After all players have drafted 35 cards, each player will begin constructing their final decks, adding any number of basic lands to reach a minimum of 40 cards.',
    'After locking their decks, players will decide on up to 5 cards to use as their "sideboard" to swap between games, and will not be allowed to change their decks or sideboard after that decision is made.',
  ];

  const maxItems = rules.length;
  const styleObj = {
    width: `calc(100% * ${maxItems})`,
    left: `calc((75% + 6rem) * ${positionIndex} * -1)`,
    transition: 'left .75s',
    WebkitTransition: 'left .75s'
  };

  const handleNext = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (positionIndex < maxItems - 1) {
      setPositionIndex(positionIndex + 1);
    } else {
      setPositionIndex(0);
    }
  }

  const handleBack = (e) => {
    e.preventDefault();
    if (positionIndex > 0) {
      setPositionIndex(positionIndex - 1);
    } else {
      setPositionIndex(maxItems - 1);
    }
  }

  return (
    <div id='rules-carousel-conatiner' >
      <button
        id='rules-carousel-back-btn'
        onClick={handleBack} >
        <i className="fas fa-chevron-left"></i>
      </button>
      <div id='rules-carousel-content' style={styleObj}>
        {
          rules.map(rulesText => (
            <RulesCarouselItem rulesText={rulesText} key={rulesText} />
          ))
        }
      </div>
      <button
        id='rules-carousel-next-btn'
        onClick={handleNext} >
        <i className="fas fa-chevron-right"></i>
      </button>
      <div id='rc-position-indicator-container' >
        <PositionIndicator
          positionIndex={positionIndex}
          maxItems={maxItems}
          clr='var(--orange-hl)' />
      </div>
    </div>
  );
};

export default RulesCarousel;