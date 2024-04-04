// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications'; // Import Notifications component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Notifications /> {/* Render Notifications component */}
  </React.StrictMode>,
  document.getElementById('root-notifications')
);

