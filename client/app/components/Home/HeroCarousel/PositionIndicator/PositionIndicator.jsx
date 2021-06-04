import React, { useState, useEffect } from 'react';
import './PositionIndicator.css';
import PositionIndicatorItem from './PositionIndicatorItem.jsx';

const PositionIndicator = ({ positionIndex, maxItems }) => {
  const populateIndicator = new Array(maxItems);
  for (let i = 0; i < maxItems; i++) {
    populateIndicator[i] = i;
  }

  return (
    <div id='position-indicator-container' >
      {
        populateIndicator.map((item, index) => {
         return (<PositionIndicatorItem key={index} currentPos={positionIndex} myPos={index} />);
        })
      }
    </div>
  );
};

export default PositionIndicator;