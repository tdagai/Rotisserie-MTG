import React, { useEffect } from 'react';
import './Notification.css';

// Roles:
//  success
//  warning
//  error
//  info

const _fadeOut = (cb) => {
  document.querySelector('.notification-container').classList.add('fade-out');
  window.setTimeout(cb, 500);
}

const Notification = ({ text, role, cb }) => {
  let fadeOutTimerLabel = '';
  useEffect(() => {
    fadeOutTimerLabel =  window.setTimeout(() => {
      _fadeOut(cb);
    }, 5000);

    return () => window.clearTimeout(fadeOutTimerLabel);
  }, []);

  const dismissNotification = (e) => {
    e.preventDefault();
    window.clearTimeout(fadeOutTimerLabel);
    _fadeOut(cb);
  }



  return (
    <div className={`notification-container ${role}-notification`} >
      <button
        className='close-notification-btn'
        onClick={dismissNotification} >
        <i className="fas fa-times"></i>
      </button>
      <p>{text}</p>
    </div>
  );
};

export default Notification;