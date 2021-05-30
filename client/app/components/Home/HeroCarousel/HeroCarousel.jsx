import React from 'react';
import HeroCarouselItem from './HeroCarouselItem/HeroCarouselItem.jsx'
import './HeroCarousel.css';

const HeroCarousel = () => {
  return (
    <HeroCarouselItem
    heroImage='https://media.magic.wizards.com/images/wallpaper/Black_Lotus_MTGOweek_Facebook_Wallpaper.jpg'
    artistCredit='Black Lotus by Chris Rahn'
    text={'Draft Cards From Throughout Magic\'s History'} />
  );
};

export default HeroCarousel;