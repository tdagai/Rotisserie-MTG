import React, { useState, useEffect } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import axios from 'axios';
import './NewsletterCTA.css';

const NewsletterCTA = ({ toggleNotif, setNotificationSettings }) => {
  const [inputData, setInputData] = useState('');
  const [inputFocused, toggleFocus] = useState(false);

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
        setNotificationSettings({ role: 'success', text: emailMessages.emailAdded });
        toggleNotif(true);
      })
      .catch((err) => {
        console.error(err);
      })
  }

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
    </div>
  )
};

export default NewsletterCTA;