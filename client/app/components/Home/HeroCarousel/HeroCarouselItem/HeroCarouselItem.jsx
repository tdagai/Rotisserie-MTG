import React from 'react';
import '../HeroCarousel.css';

const HeroCarouselItem = ({ heroImage, artistCredit, text }) => {
  return (
    <div className='hero-carousel-item' >
      <p className='hero-artcred' >{artistCredit}</p>
      <img src={heroImage} alt='hero image' className='hero-img' ></img>
      <h1 className='hero-text' >{text}</h1>
      <div className='hero-gradient' ></div>
    </div>
  );
};

export default HeroCarouselItem;