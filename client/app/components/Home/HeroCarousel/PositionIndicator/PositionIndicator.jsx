import React from 'react';
import './PositionIndicator.css';

const PositionIndicator = ({ positionIndex }) => {

  return (
    <div id='position-indicator-container' >
      <div className={`position-indicator-item${positionIndex === 0 ? ' current-position' : ''}`} ></div>
      <div className={`position-indicator-item${positionIndex === 1 ? ' current-position' : ''}`} ></div>
      <div className={`position-indicator-item${positionIndex === 2 ? ' current-position' : ''}`} ></div>
    </div>
  );
};

export default PositionIndicator;