import React, { useState, useEffect } from 'react';
import './PopUp.css';

const PopUp = ({ message }) => {
  const [showPopUp, togglePopUp] = useState(true);

  useEffect(() => {
    togglePopUp(true);
  }, [message])

  let splitUpMessage = message.split('\n');

  const handleClosePopUp = (e) => {
    e.preventDefault();
    togglePopUp(false);
  }

  if (!showPopUp) {
    return (<></>);
  }

  return (
    <div id='popup' >
      <button
        id='close-popup'
        className='button-style'
        aria-label='close popup button'
        onClick={handleClosePopUp} >
        <i className="fas fa-times"></i>
      </button>
      {splitUpMessage.map((line, index) => <p className='pop-up-line' key={`line ${index}`} >{line}</p>)}
    </div>
  );
};

export default PopUp;