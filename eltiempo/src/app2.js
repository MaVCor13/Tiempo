// App2.js
import React from 'react';
import './App.css';
import P2 from './P2';

function App2() {
  const weatherData = {
    "latitude": -31.375,
    "longitude": -64.125,
    "generationtime_ms": 0.13303756713867188,
    "hourlyData": [],
  };

  return (
    <div className="App">
      <P2 hourlyData={weatherData.hourlyData} />
    </div>
  );
}

export default App2;
