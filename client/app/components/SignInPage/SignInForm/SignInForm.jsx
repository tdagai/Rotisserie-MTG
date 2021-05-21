import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignInForm.css';

const SignInForm = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setPasswordVisibility] = useState(false);

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
    <form id='signin-form' >
      <h1 id='signin-form-title' >Sign in</h1>
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
        id='signin-btn'
        className={`${usernameInput.length === 0 || passwordInput.length === 0 ? 'disabled-' : ''}button-style`}
        type='submit'
        aria-label='sign
        in button' >Sign in</button>
      <p id='forgot-password' >Forgot Password?</p>
      <div id='signup-message' >
        Don't have an account? <Link to='/signup' className='link-style' >Sign up here!</Link>
      </div>
    </form>
  );
};

export default SignInForm;