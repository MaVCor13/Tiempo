function getTemperatureAt3AM(data) {
    // Asumiendo que los datos horarios están almacenados en un array llamado 'hourly'
    const hourlyData = data.hourly;
  
    // Filtra los datos para encontrar la entrada correspondiente a las 3:00 AM del 3 de octubre de 2023
    const desiredTime = new Date('2023-10-03T03:00:00');  // Crea una fecha con la hora deseada
    const temperatureData = hourlyData.find(entry => {
      const entryTime = new Date(entry.timestamp * 1000);  // Convierte la marca de tiempo en una fecha
      return entryTime.getTime() === desiredTime.getTime();
    });
  
    if (temperatureData) {
      const temperature = temperatureData.temperature_2m;  // Suponiendo que 'temperature_2m' es la temperatura a 2 metros
      return `La temperatura a las 3:00 AM del 3 de octubre de 2023 fue ${temperature}°C`;
    } else {
      return 'No se encontraron datos para esa hora.';
    }
  }
  
  
  console.log(getTemperatureAt3AM(data));
  