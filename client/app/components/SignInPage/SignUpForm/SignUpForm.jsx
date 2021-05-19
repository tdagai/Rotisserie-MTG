import React from 'react';
import '../SignInForm/SignInForm.css';

const SignUpForm = () => {
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
        <input className='signin-input-style' type='password' required ></input>
      </label>
      <button className='button-style' type='submit' aria-label='sign in button' >Sign up</button>
      <div id='signin-message' >Already have an account? Sign in here!</div>
    </form>
  );
};

export default SignUpForm;