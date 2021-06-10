import React, { useState, useEffect } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import axios from 'axios';
import './NewsletterCTA.css';

const updateInputData = (e, setInputData) => {
  setInputData(e.target.value);
}

const clearInputValue = (inputToClear, setInputData) => {
  inputToClear.value = '';
  setInputData('');
}


const NewsletterCTA = ({ toggleNotif, setNotificationSettings }) => {
  const [inputData, setInputData] = useState('');
  const [inputFocused, toggleFocus] = useState(false);

  const biggerThan450 = useMediaPredicate("(min-width: 450px)");
  const emailMessages = {
    emailAdded: 'Your email has been successully added to the mailing list!',
    invalidEmailFormat: 'This is not a valid email format. Please try again.',
    fileSysErr: 'There was an issue adding your email to our system.'
  }

  const handleSubmitInputData = (e) => {
    e.preventDefault();
    console.log(inputData);
    const dataToSend = inputData;
    clearInputValue(document.querySelector('#newsletter-input'), setInputData);
    axios.post('/add-newsletter-sub', { email: dataToSend })
      .then(({ data }) => {
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

      <form>
        <label>
          <p>Email</p>
          <input
            type='email'
            id='newsletter-input'
            className={`${inputFocused ? 'newsletter-input-focused' : ''}`}
            placeholder='Enter Your Email'
            onChange={(e) => updateInputData(e, setInputData)}
            onFocus={() => toggleFocus(true)}
            onBlur={() => toggleFocus(false)} >
          </input>
          <button
            type='submit'
            className={`button-style${inputFocused && biggerThan450 ? ' newsletter-input-focused' : ''}`}
            onClick={handleSubmitInputData} >
            submit
        </button>
        </label>
      </form>
    </div>
  )
};

export default NewsletterCTA;