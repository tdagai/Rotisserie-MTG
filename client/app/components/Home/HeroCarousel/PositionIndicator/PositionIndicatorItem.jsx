import React from 'react';
import './PositionIndicator.css';

const PositionIndicatorItem = ({ currentPos, myPos }) => {

  return (
    <div className={`position-indicator-item${currentPos === myPos ? ' current-position' : ''}`} ></div>
  );
};

export default PositionIndicatorItem;