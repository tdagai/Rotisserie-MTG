import React from 'react';
import './Notification.css';

// Roles:
//  success
//  warning
//  error
//  info

const Notification = ({ text, role, cb }) => {
  const dismissNotification = (e) => {
    e.preventDefault();
    cb();
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