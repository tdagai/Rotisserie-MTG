import React from 'react';
import NavBar from '../Home/NavBar/NavBar.jsx';
import HowToPlay from './HowToPlay/HowToPlay.jsx';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div id='about-page-container' >
      <NavBar whereAmI='about' />
      <div id='about-content' >
        <HowToPlay />
        {/* <div id='about-selection-container' >
          <button className='about-selection-btn' ><i className="fas fa-arrow-circle-left"></i> About The Creator</button>
          <button className='about-selection-btn' >How To Play <i className="fas fa-arrow-circle-right"></i></button>
        </div> */}
      </div>
    </div>
  );
};

export default AboutPage;