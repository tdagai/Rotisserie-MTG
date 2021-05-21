import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignInForm from './SignInForm/SignInForm.jsx';
import SignUpForm from './SignUpForm/SignUpForm.jsx';
import PopUp from './PopUp.jsx';
import './SignInPage.css';

const SignInPage = ({ inOrUp }) => {
  const [showPopUp, togglePopUp] = useState(true);

  useEffect(() => {
    togglePopUp(true);
  }, [inOrUp])

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
      { showPopUp && <PopUp handleClosePopUp={handleClosePopUp} inOrUp={inOrUp} /> }
    </div>
  );
};

export default SignInPage;