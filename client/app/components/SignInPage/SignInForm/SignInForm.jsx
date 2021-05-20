import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignInForm.css';

const SignInForm = () => {
  const [showPassword, setPasswordVisibility] = useState(false);

  const handlePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisibility(!showPassword);
  }

  return (
    <form id='signin-form' >
      <h1 id='signin-form-title' >Sign in</h1>
      <label>Username
        <input className='signin-input-style' type='text' required ></input>
      </label>
      <label>Password
        <input className='signin-input-style' type={showPassword ? 'text' : 'password'} required ></input>
        <button
          className='reveal-password-btn'
          aria-label='reveal password button'
          onClick={handlePasswordVisibility}  >
          {
            showPassword
              ? <i className="fas fa-eye"></i>
              : <i className="fas fa-eye-slash"></i>
          }
        </button>
      </label>
      <button id='signin-btn' className='button-style' type='submit' aria-label='sign in button' >Sign in</button>
      <p id='forgot-password' >Forgot Password?</p>
      <div id='signup-message' >
        Don't have an account? <Link to='/signup' className='link-style' >Sign up here!</Link>
      </div>
    </form>
  );
};

export default SignInForm;