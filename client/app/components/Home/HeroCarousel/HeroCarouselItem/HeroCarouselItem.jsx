import React from 'react';
import '../HeroCarousel.css';

const HeroCarouselItem = ({ heroImage, artistCredit, text }) => {
  return (
    <div className='hero-carousel-item' >
      { artistCredit &&
        <div className='hero-artcred-container' >
          <p className='hero-artcred' >{artistCredit}</p>
        </div>
      }
      <img src={heroImage} alt='hero image' className='hero-img' ></img>
      <div className='hero-gradient' >
        <h1 className='hero-text' >{text}</h1>
      </div>
    </div>
  );
};

export default HeroCarouselItem;