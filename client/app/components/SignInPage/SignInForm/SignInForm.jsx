import React from 'react';
import './SignInForm.css';

const SignInForm = () => {
  return (
    <form id='signin-form' >
      <h1 id='signin-form-title' >Sign in</h1>
      <label>Username
        <input className='signin-input-style' type='text' ></input>
      </label>
      <label>Password
        <input className='signin-input-style' type='password' ></input>
      </label>
      <button className='button-style' type='submit' aria-label='sign in button' >Sign in</button>
      <p id='forgot-password' >Forgot Password?</p>
      <div id='signup-message' >Don't have an account? Sign up here!</div>
    </form>
  );
};

export default SignInForm;