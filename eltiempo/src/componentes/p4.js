function getMaxWindSpeedOnDate(data, date) {
    // Asumiendo que los datos horarios están almacenados en un array llamado 'hourly'
    const hourlyData = data.hourly;
  
    // Convierte la fecha en una marca de tiempo UNIX (en segundos)
    const targetTimestamp = date.getTime() / 1000;
  
    // Filtra los datos para encontrar las entradas del 6 de octubre de 2023
    const windSpeedData = hourlyData
      .filter(entry => new Date(entry.timestamp * 1000).toDateString() === date.toDateString());
  
    if (windSpeedData.length > 0) {
      // Usando reduce para encontrar la velocidad máxima del viento
      const maxWindSpeed = windSpeedData.reduce((max, entry) => Math.max(max, entry.wind_speed_10m), 0);
  
      return `La velocidad máxima del viento a 10 metros sobre el suelo el 6 de octubre de 2023 fue ${maxWindSpeed} m/s`;
    } else {
      return 'No se encontraron datos para esa fecha.';
    }
  }
  
  // Define la fecha específica, 6 de octubre de 2023
  const targetDate = new Date('2023-10-06');
  
  // Llama a la función e imprime el resultado
  console.log(getMaxWindSpeedOnDate(data, targetDate));
  