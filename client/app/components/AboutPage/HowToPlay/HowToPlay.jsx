import React from 'react';
import RulesCarousel from './RulesCarousel/RulesCarousel.jsx';
import './HowToPlay.css';

const HowToPlay = () => {
  return (
    <div id='htp-container'>
      <h1 id='htp-title' >How To Play:</h1>
      <div id='htp-content' >
        <RulesCarousel />
      </div>
    </div>
  );
};

export default HowToPlay;