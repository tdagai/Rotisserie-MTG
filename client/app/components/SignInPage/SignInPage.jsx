import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from './SignInForm/SignInForm.jsx';
import SignUpForm from './SignUpForm/SignUpForm.jsx';
import './SignInPage.css';

const SignInPage = ({ inOrUp }) => {
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
    </div>
  );
};

export default SignInPage;