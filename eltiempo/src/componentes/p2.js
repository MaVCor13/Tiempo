// P2.js
import React from 'react';

function P2({ hourlyData }) {
  const hoursAvailable = hourlyData.length;

  return (
    <div>
      <h2>Pregunta 2: Horas de Datos Meteorológicos en 'hourly'</h2>
      <p>Horas de datos meteorológicos disponibles en 'hourly': {hoursAvailable}</p>
    </div>
  );
}

export default P2;
