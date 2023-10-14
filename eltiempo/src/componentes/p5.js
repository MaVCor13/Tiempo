function getSunriseTime(data, date) {
    // Asumiendo que los datos diarios están almacenados en un array llamado 'daily'
    const dailyData = data.daily;
  
    // Convierte la fecha en una marca de tiempo UNIX (en segundos)
    const targetTimestamp = date.getTime() / 1000;
  
    // Busca los datos diarios correspondientes a la fecha especificada
    const targetDailyData = dailyData.find(entry => entry.timestamp === targetTimestamp);
  
    if (targetDailyData) {
      const sunriseTimestamp = targetDailyData.sunrise;
      
      if (sunriseTimestamp) {
        // Convierte la marca de tiempo del amanecer en una hora legible
        const sunriseTime = new Date(sunriseTimestamp * 1000);
        const sunriseHours = sunriseTime.getUTCHours();
        const sunriseMinutes = sunriseTime.getUTCMinutes();
        
        return `El sol sale a las ${sunriseHours}:${sunriseMinutes} UTC el 5 de octubre de 2023.`;
      } else {
        return 'No se encontraron datos de salida del sol para esa fecha.';
      }
    } else {
      return 'No se encontraron datos para esa fecha.';
    }
  }
  
  // Define la fecha específica, 5 de octubre de 2023
  const targetDate = new Date('2023-10-05');
  
  // Llama a la función e imprime el resultado
  console.log(getSunriseTime(data, targetDate));
  