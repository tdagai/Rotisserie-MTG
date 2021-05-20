import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignInForm from './SignInForm/SignInForm.jsx';
import SignUpForm from './SignUpForm/SignUpForm.jsx';
import './SignInPage.css';

const SignInPage = ({ inOrUp }) => {
  const [showPopUp, togglePopUp] = useState(true);

  const handleClosePopUp = (e) => {
    e.preventDefault();
    togglePopUp(false);
  }

  return (
    <div id='signin-page-container' >
      <div id='signin-page-left' className='signin-page-partition' >
        <h1><Link to='/' className='signin-app-title' id='signin-app-title-orange' >Rotisserie</Link></h1>
        <h1><Link to='/' className='signin-app-title' >MTG</Link></h1>
      </div>
      <div id='signin-page-right' className='signin-page-partition' >
        {
          inOrUp === 'in'
            ? <SignInForm />
            : <SignUpForm />
        }
      </div>
      { showPopUp &&
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
      }
    </div>
  );
};

export default SignInPage;