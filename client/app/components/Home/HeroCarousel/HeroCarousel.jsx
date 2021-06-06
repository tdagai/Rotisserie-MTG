import React, { useState, useEffect } from 'react';
import PositionIndicator from './PositionIndicator/PositionIndicator.jsx';
import HeroCarouselItem from './HeroCarouselItem/HeroCarouselItem.jsx'
import './HeroCarousel.css';

const HeroCarousel = () => {
  const [positionIndex, setPositionIndex] = useState(0);
  // const [timeoutHandle, setTimeoutHandle] = useState('');

  // useEffect(() => {
  //   let tempHandle = setTimeout(() => {
  //     if (positionIndex < 2) {
  //       setPositionIndex(positionIndex + 1);
  //     } else {
  //       setPositionIndex(0);
  //     }
  //   }, 5000);
  //   setTimeoutHandle(tempHandle);
  // }, [positionIndex]);


  const maxItems = 4;
  const heroItemData = [{
    heroImage: 'https://images3.alphacoders.com/558/558540.jpg',
    artistCredit: 'Time Walk by Chris Rahn',
    text: 'Draft Cards From Throughout Magic\'s History'
  },
  {
    heroImage: 'https://pbs.twimg.com/media/Ce_T7zUUYAASFcV?format=jpg&name=medium',
    artistCredit: 'Magnifying Glass by Dan Scott',
    text: 'Enjoy A Seemless Search Experience Powered By Scryfall'
  },
  {
    heroImage: 'https://static-prod.weplay.tv/2020-03-12/w-3360/webp/5ff07c42dbeeeeb9abd2dfedd2593718_large_cover.748CDB-F2F6F9-B4CCEC.jpeg',
    text: 'Meet More People To Draft With On Our Moderated Discord Community'
  },
  {
    heroImage: 'https://miro.medium.com/max/1838/1*09z8y8Q7CsZInYJ8IZ27aQ.jpeg',
    text: 'Like What you see? Want to help support me? Buy me a coffee!'
  }];

  const styleObj = {
    width: `calc(100% * ${maxItems})`,
    left: `calc(100% * ${positionIndex} * -1)`,
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
    // window.clearTimeout(timeoutHandle);
  }

  const handleBack = (e) => {
    e.preventDefault();
    if (positionIndex > 0) {
      setPositionIndex(positionIndex - 1);
    } else {
      setPositionIndex(maxItems - 1);
    }
    // window.clearTimeout(timeoutHandle);
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
      <PositionIndicator positionIndex={positionIndex} maxItems={maxItems} />
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