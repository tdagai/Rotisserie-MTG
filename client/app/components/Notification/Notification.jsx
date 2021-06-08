import React, { useState } from 'react';
import './Notification.css';

// Roles:
//  success
//  warning
//  error
//  info

const Notification = ({ text, role }) => {
  const [display, toggleNotification] = useState(true);

  const closeNotification = (e) => {
    e.preventDefault();
    toggleNotification(false);
  }

  return (
    <div className={`notification-container ${role}-notification${display ? '' : ' invisible'}`} >
      <button
        className='close-notification-btn'
        onClick={closeNotification} >
        <i className="fas fa-times"></i>
      </button>
      <p>{text}</p>
    </div>
  );
};

export default Notification;