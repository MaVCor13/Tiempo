function getWeatherCodeAtTime(data, timestamp) {
    // Asumiendo que los datos horarios están almacenados en "hourly"
    const hourlyData = data.hourly.data;
  
    // Encuentra el registro correspondiente al timestamp dado
    const weatherData = hourlyData.find((entry) => entry.time === timestamp);
  
    if (weatherData) {
      const weatherCode = weatherData.icon;
      const weatherDescription = weatherData.summary;
  
      return `A las 8:00 AM del 4 de octubre de 2023, el código meteorológico es: ${weatherCode} (${weatherDescription}).`;
    } else {
      return 'No se encontraron datos meteorológicos para el momento especificado.';
    }
  }
  
  // Define el timestamp para las 8:00 AM del 4 de octubre de 2023 (debes ajustarlo según tus datos)
  const timestampToFind = 1672800000; // Esto es solo un ejemplo
  
  // Llama a la función e imprime el resultado
  console.log(getWeatherCodeAtTime(data, timestampToFind));
  