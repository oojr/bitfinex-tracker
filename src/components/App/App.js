import React from 'react';
// import WebSocket from 'ws';

import './App.css';
import Ticker from '../Ticker/Ticker';

const App = () => {
  return (
    <div className="container">
      <div className="ticker">
        <Ticker />
      </div>

      <div className="orders">
        <span> order table </span>
      </div>
      <div className="trades">
        <span> trade table </span>
      </div>
    </div>
  );
};

export default App;
