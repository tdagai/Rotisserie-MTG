import React from 'react';

const PopUp = ({ handleClosePopUp, inOrUp }) => {
  return (
    <div id='temp-popup' >
      <button
        id='signin-page-close-popup'
        className='button-style'
        aria-label='close popup button'
        onClick={handleClosePopUp} >
        <i className="fas fa-times"></i>
      </button>
      {`This page is currently only for show and has no backend infrastructure to support it.`}
      <br />
      {`You may try to sign ${inOrUp === 'in' ? 'in' : 'up'} if you'd like, but nothing would happen if this pop up appeared when you loaded the page.`}
    </div>
  );
};

export default PopUp;