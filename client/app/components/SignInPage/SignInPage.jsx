import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignInForm from './SignInForm/SignInForm.jsx';
import SignUpForm from './SignUpForm/SignUpForm.jsx';
import PopUp from '../PopUp/PopUp.jsx';
import './SignInPage.css';

const SignInPage = ({ inOrUp }) => {

  const popUpMessage = `This page is currently only for show and has no backend infrastructure to support it.\nYou may try to sign ${inOrUp === 'in' ? 'in' : 'up'} if you'd like, but nothing would happen if this pop up appeared when you loaded the page.`

  return (
    <div id='signin-page-container' >
      <div id='signin-page-left' className='signin-page-partition' >
        <h1 id='signin-app-title' ><Link to='/' >Rotisserie MTG</Link></h1>
      </div>
      <div id='signin-page-right' className='signin-page-partition' >
        {
          inOrUp === 'in'
            ? <SignInForm />
            : <SignUpForm />
        }
      </div>
      <PopUp message={popUpMessage} inOrUp={inOrUp} />
    </div>
  );
};

export default SignInPage;