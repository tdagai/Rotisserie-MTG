import React, { useState, useEffect } from 'react';
import PositionIndicator from './PositionIndicator/PositionIndicator.jsx';
import HeroCarouselItem from './HeroCarouselItem/HeroCarouselItem.jsx'
import './HeroCarousel.css';

const HeroCarousel = () => {
  const [positionIndex, setPositionIndex] = useState(0);
  const [timeoutHandle, setTimeoutHandle] = useState('');

  useEffect(() => {
    let tempHandle = setTimeout(() => {
      if (positionIndex < 2) {
        setPositionIndex(positionIndex + 1);
      } else {
        setPositionIndex(0);
      }
    }, 5000);
    setTimeoutHandle(tempHandle);
  }, [positionIndex]);


  const maxItems = 3;
  const heroItemData = [{
    heroImage: 'https://media.magic.wizards.com/images/wallpaper/Black_Lotus_MTGOweek_Facebook_Wallpaper.jpg',
    artistCredit: 'Black Lotus by Chris Rahn',
    text: 'Draft Cards From Throughout Magic\'s History'
  },
  {
    heroImage: 'https://i.imgur.com/Th8a4Xd.jpg',
    // heroImage: 'https://pbs.twimg.com/media/Ce_T7zUUYAASFcV?format=jpg&name=medium',
    artistCredit: 'Magnifying Glass by Dan Scott',
    text: 'Enjoy A Powerful Search Experience Powered By Scryfall'
  },
  {
    heroImage: 'https://i.imgur.com/KOGixJF.jpg',
    text: 'Meet More People To Draft With On Our Moderated Discord Community'
  }];

  const styleObj = {
    left: `calc((100vw - 6px) * ${positionIndex} * -1)`,
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
    window.clearTimeout(timeoutHandle);
  }

  const handleBack = (e) => {
    e.preventDefault();
    if (positionIndex > 0) {
      setPositionIndex(positionIndex - 1);
    } else {
      setPositionIndex(maxItems - 1);
    }
    window.clearTimeout(timeoutHandle);
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