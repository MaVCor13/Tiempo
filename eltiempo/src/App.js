// App1.js
import React from 'react';
import './App.css';
import P1 from './P1';

function App1() {
  const data = {
    "latitude": -31.375,
    "longitude": -64.125,
    "generationtime_ms": 0.13303756713867188,
  };

  return (
    <div className="App">
      <P1 latitude={data.latitude} longitude={data.longitude} />
    </div>
  );
}

export default App1;


