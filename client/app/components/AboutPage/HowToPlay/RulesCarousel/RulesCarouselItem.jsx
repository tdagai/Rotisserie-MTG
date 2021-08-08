import React from 'react';
import './RulesCarousel.css';

const RulesCarouselItem = ({ rulesText }) => {
  return (
    <div className='rules-carousel-item' >
      <span className='rules-text' >{rulesText}</span>
    </div>
  );
};

export default RulesCarouselItem;