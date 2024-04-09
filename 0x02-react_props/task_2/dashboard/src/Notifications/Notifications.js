// Notifications.js
import React from 'react';
import NotificationItem from './NotificationItem';

const Notifications = ({ notifications }) => {
  return (
    <ul>
      {notifications.map(({ type, html, value }, index) => (
        <NotificationItem key={index} type={type} html={html} value={value} />
      ))}
    </ul>
  );
};

export default Notifications;

