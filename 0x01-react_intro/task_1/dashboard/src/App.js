// App.js
import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

// eslint-disable-next-line
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Your existing header content */}
      </header>
      <body className="App-body">
        {/* Your existing body content */}
      </body>
      <footer className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </footer>
    </div>
  );
}

export default App;
