// P1.js
import React from 'react';

function P1({ latitude, longitude }) {
  return (
    <div>
      <h2>Pregunta 1: Latitud y Longitud de la Ubicación</h2>
      <p>Latitud: {latitude}</p>
      <p>Longitud: {longitude}</p>
    </div>
  );
}

export default P1;
