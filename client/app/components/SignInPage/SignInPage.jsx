import React from 'react';
import SignInForm from './SignInForm/SignInForm.jsx';
import SignUpForm from './SignUpForm/SignUpForm.jsx';
import './SignInPage.css';

const SignInPage = ({ inOrUp }) => {
  return (
    <div id='signin-page-container' >
      <div id='signin-page-left' className='signin-page-partition' >
        <h1 id='signin-app-title-orange' className='signin-app-title' >Rotisserie</h1>
        <h1 className='signin-app-title' >MTG</h1>
      </div>
      <div id='signin-page-right' className='signin-page-partition' >
        {
          inOrUp === 'in'
            ? <SignInForm />
            : <SignUpForm />
        }
      </div>
    </div>
  );
};

export default SignInPage;