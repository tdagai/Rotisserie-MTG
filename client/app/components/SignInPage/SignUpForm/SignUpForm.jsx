import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../SignInForm/SignInForm.css';

const SignUpForm = () => {
  const [emailInput, setEmailInput] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setPasswordVisibility] = useState(false);

  const handleEmailInput = (e) => {
    setEmailInput(e.target.value);
  };

  const handleUsernameInput = (e) => {
    setUsernameInput(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPasswordInput(e.target.value);
  };


  const handlePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisibility(!showPassword);
  }

  return (
    <form id='signup-form' >
      <h1 id='signup-form-title' >Sign up</h1>
      <label>Email
        <input
          className='signin-input-style'
          type='email'
          onChange={handleEmailInput}
          required >
        </input>
      </label>
      <label>Username
        <input
          className='signin-input-style'
          type='text'
          onChange={handleUsernameInput}
          required >
        </input>
      </label>
      <label>Password
        <input
          className='signin-input-style'
          type={showPassword ? 'text' : 'password'}
          onChange={handlePasswordInput}
          required >
        </input>
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
      <button
        id='signup-btn'
        className={`${!emailInput || !usernameInput || !passwordInput ? 'disabled-' : ''}button-style`}
        type='submit'
        onClick={(e) => e.preventDefault()}
        aria-label='sign in button' >
        Sign up
      </button>
      <div id='signin-message' >
        Already have an account? <Link to='/signin' className='link-style' >Sign in here!</Link>
      </div>
    </form>
  );
};

export default SignUpForm;