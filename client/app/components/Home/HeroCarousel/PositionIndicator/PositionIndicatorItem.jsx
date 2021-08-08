import React from 'react';
import './PositionIndicator.css';

const PositionIndicatorItem = ({ currentPos, myPos, clr }) => {

  return (
    <div
      className={`position-indicator-item${currentPos === myPos ? ' current-position' : ''}`}
      style={{backgroundColor: clr}} >
    </div>
  );
};

export default PositionIndicatorItem;