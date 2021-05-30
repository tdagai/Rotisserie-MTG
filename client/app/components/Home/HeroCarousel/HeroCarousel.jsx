import React, { useState } from 'react';
import PositionIndicator from './PositionIndicator/PositionIndicator.jsx';
import HeroCarouselItem from './HeroCarouselItem/HeroCarouselItem.jsx'
import './HeroCarousel.css';

const HeroCarousel = () => {
  const [positionIndex, setPositionIndex] = useState(0);
  const maxItems = 3;
  const heroItemData = [{
    heroImage: 'https://media.magic.wizards.com/images/wallpaper/Black_Lotus_MTGOweek_Facebook_Wallpaper.jpg',
    artistCredit: 'Black Lotus by Chris Rahn',
    text: 'Draft Cards From Throughout Magic\'s History'
  },
  {
    heroImage: 'https://www.artofmtg.com/wp-content/uploads/2016/04/Magnifying-Glass-Shadows-over-Innistrad-Art.jpg',
    artistCredit: 'Magnifying Glass by Dan Scott',
    text: 'Enjoy A Powerful Search Experience Powered By Scryfall'
  },
  {
    heroImage: 'https://cybernews.com/wp-content/uploads/2020/07/Discord-privacy-tips-that-you-should-use-.jpg',
    text: 'Meet More People To Draft With On Our Moderated Discord Community'
  }];

  const styleObj = {
    left: `calc((100vw - 6px) * ${positionIndex} * -1)`,
    transition: 'left .5s',
    WebkitTransition: 'left .5s'
  };

  const handleNext = (e) => {
    e.preventDefault();
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
    <div className='hero-container' >
      <button
        id='hero-back-btn'
        className='button-style'
        onClick={handleBack}
        aria-label='hero banner back button' >
        <i className="fas fa-caret-left"></i>
      </button>
      <PositionIndicator positionIndex={positionIndex} />
      <div id='carousel-item-container' style={styleObj} >
      {
        heroItemData.map(({ heroImage, artistCredit = '', text }) => (
          <HeroCarouselItem key={text} heroImage={heroImage} artistCredit={artistCredit} text={text} />
        ))
      }
      </div>
      <button
        id='hero-next-btn'
        className='button-style'
        onClick={handleNext}
        aria-label='hero banner next button' >
        <i className="fas fa-caret-right"></i>
      </button>
    </div>
  );
};

export default HeroCarousel;