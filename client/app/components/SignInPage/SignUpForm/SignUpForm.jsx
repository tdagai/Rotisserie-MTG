import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../SignInForm/SignInForm.css';

const SignUpForm = () => {
  const [showPassword, setPasswordVisibility] = useState(false);

  const handlePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisibility(!showPassword);
  }

  return (
    <form id='signup-form' >
      <h1 id='signup-form-title' >Sign up</h1>
      <label>Email
        <input className='signin-input-style' type='email' required ></input>
      </label>
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
      <button id='signup-btn' className='button-style' type='submit' aria-label='sign in button' >Sign up</button>
      <div id='signin-message' >
        Already have an account? <Link to='/signin' className='link-style' >Sign in here!</Link>
      </div>
    </form>
  );
};

export default SignUpForm;