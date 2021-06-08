import React, { useState, useEffect } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import axios from 'axios';
import './NewsletterCTA.css';

const NewsletterCTA = () => {
  const [inputData, setInputData] = useState('');
  const [inputFocused, toggleFocus] = useState(false);
  const [displayEmailAdded, toggleEmailAdded] = useState(false);



  const biggerThan450 = useMediaPredicate("(min-width: 450px)");
  const emailMessages = {
    emailAdded: 'Your email has been successully added to the mailing list!',
    invalidEmailFormat: 'This is not a valid email format. Please try again.',
    fileSysErr: 'There was an issue adding your email to our system.'
  }

  const handleInputFocus = (e) => {
    e.preventDefault();
    toggleFocus(true);
  };

  const handleInputBlur = (e) => {
    e.preventDefault();
    toggleFocus(false);
  };

  const updateInputData = (e) => {
    setInputData(e.target.value);
  }

  const handleSubmitInputData = (e) => {
    e.preventDefault();
    console.log(inputData);
    axios.post('/add-newsletter-sub', { email: inputData })
      .then(({data}) => {
        console.log(data);
        toggleEmailAdded(true);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  const emailAddedMsg = (<p>Your email has been successully added to the mailing list!</p>);

  return (
    <div id='newsletter-cta' >
      <h2>Wanna be the first to hear about improvements coming to the website?</h2>
      <h2>Enter your email below to join our newsletter!</h2>

      <label>
        <p>Email</p>
        <input
          type='email'
          className={`${inputFocused ? 'newsletter-input-focused' : ''}`}
          onChange={updateInputData}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur} >
        </input>
        <button
          type='submit'
          className={`button-style${inputFocused && biggerThan450 ? ' newsletter-input-focused' : ''}`}
          onClick={handleSubmitInputData} >
          submit
        </button>
      </label>
      { displayEmailAdded && emailAddedMsg }
    </div>
  )
};

export default NewsletterCTA;