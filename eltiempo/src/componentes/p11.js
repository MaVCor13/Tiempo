function calculateAverageWindSpeed(data, targetDate) {
    // Asumiendo que los datos horarios están almacenados en "hourly"
    const hourlyData = data.hourly.data;
  
    // Filtrar los datos para el día especificado (6 de octubre de 2023)
    const windSpeedData = hourlyData.filter((entry) => {
      const entryTimestamp = entry.time;
      const entryDate = new Date(entryTimestamp * 1000);
      return entryDate.getDate() === targetDate.getDate();
    });
  
    // Calcular la suma de las velocidades del viento durante el día
    const totalWindSpeed = windSpeedData.reduce((sum, entry) => {
      return sum + entry.windSpeed; // Asumiendo que "windSpeed" es el nombre correcto en tus datos
    }, 0);
  
    // Calcular el promedio dividiendo la suma por el número de registros
    const averageWindSpeed = totalWindSpeed / windSpeedData.length;
  
    return averageWindSpeed;
  }
  
  // Define la fecha objetivo (6 de octubre de 2023)
  const targetDate = new Date('2023-10-06');
  
  // Llama a la función para calcular el promedio de velocidad del viento
  const averageWindSpeedOct6 = calculateAverageWindSpeed(data, targetDate);
  
  // Imprime la velocidad promedio del viento
  console.log(`Velocidad Promedio del Viento el 6 de octubre de 2023: ${averageWindSpeedOct6} m/s`);
  