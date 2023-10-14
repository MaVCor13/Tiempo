function getHourlyMaxTemperatures(data, targetDate) {
    // Asumiendo que los datos horarios están almacenados en "hourly"
    const hourlyData = data.hourly.data;
  
    // Filtrar los datos para el día especificado (3 de octubre de 2023)
    const temperatures = hourlyData.filter((entry) => {
      const entryTimestamp = entry.time;
      const entryDate = new Date(entryTimestamp * 1000);
      return entryDate.getDate() === targetDate.getDate();
    });
  
    // Extraer la temperatura máxima para cada hora
    const hourlyMaxTemperatures = temperatures.map((entry) => {
      return {
        hour: new Date(entry.time * 1000).getHours(),
        temperature: entry.temperature,
      };
    });
  
    return hourlyMaxTemperatures;
  }
  
  // Define la fecha objetivo (3 de octubre de 2023)
  const targetDate = new Date('2023-10-03');
  
  // Llama a la función e imprime el resultado
  const maxTemperaturesForOct3 = getHourlyMaxTemperatures(data, targetDate);
  
  // Imprime las temperaturas máximas para cada hora
  maxTemperaturesForOct3.forEach((entry) => {
    console.log(`Hora: ${entry.hour}:00, Temperatura Máxima: ${entry.temperature}°C`);
  });
  