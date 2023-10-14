function getWeatherCode(data, date) {
    // Asumiendo que los datos diarios están almacenados en un array llamado 'daily'
    const dailyData = data.daily;
  
    // Convierte la fecha en una marca de tiempo UNIX (en segundos)
    const targetTimestamp = date.getTime() / 1000;
  
    // Busca los datos diarios correspondientes a la fecha especificada
    const targetDailyData = dailyData.find(entry => entry.timestamp === targetTimestamp);
  
    if (targetDailyData) {
      const weatherCode = targetDailyData.weather_code;
      
      if (weatherCode) {
        // Puedes tener un mapeo de códigos a palabras en un objeto
        const weatherCodeMappings = {
          1: 'Despejado',
          2: 'Mayormente despejado',
          3: 'Parcialmente nublado',
          // Agrega más mapeos según sea necesario
        };
  
        const weatherCodeInWords = weatherCodeMappings[weatherCode];
  
        return `El código meteorológico para el 7 de octubre de 2023 es ${weatherCode} (${weatherCodeInWords}).`;
      } else {
        return 'No se encontraron datos de código meteorológico para esa fecha.';
      }
    } else {
      return 'No se encontraron datos para esa fecha.';
    }
  }
  
  // Define la fecha específica, 7 de octubre de 2023
  const targetDate = new Date('2023-10-07');
  
  // Llama a la función e imprime el resultado
  console.log(getWeatherCode(data, targetDate));
  