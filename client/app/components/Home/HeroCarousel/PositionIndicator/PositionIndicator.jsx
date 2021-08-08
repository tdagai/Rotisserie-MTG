import React from 'react';
import './PositionIndicator.css';
import PositionIndicatorItem from './PositionIndicatorItem.jsx';

const PositionIndicator = ({ positionIndex, maxItems, clr }) => {
  const populateIndicator = Array.from(Array(maxItems).keys());

  return (
    <div id='position-indicator-container' >
      {
        populateIndicator.map((item, index) => {
         return (<PositionIndicatorItem
                  key={index}
                  currentPos={positionIndex}
                  myPos={index}
                  clr={clr} />);
        })
      }
    </div>
  );
};

export default PositionIndicator;