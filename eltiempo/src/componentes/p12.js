function findDayWithLargestTemperatureDifference(data) {
    // Asumiendo que los datos diarios están almacenados en "daily"
    const dailyData = data.daily.data;
  
    let maxTemperatureDifference = -Infinity;
    let dayWithLargestDifference;
  
    dailyData.forEach((day) => {
      const temperatureMax = day.temperatureMax; // Asumiendo que estos son los nombres correctos en tus datos
      const temperatureMin = day.temperatureMin;
      const temperatureDifference = temperatureMax - temperatureMin;
  
      if (temperatureDifference > maxTemperatureDifference) {
        maxTemperatureDifference = temperatureDifference;
        dayWithLargestDifference = day;
      }
    });
  
    return dayWithLargestDifference;
  }
  
  // Llama a la función para encontrar el día con la mayor diferencia de temperatura
  const dayWithLargestDifference = findDayWithLargestTemperatureDifference(data);
  
  // Imprime los detalles del día con la mayor diferencia de temperatura
  console.log("Día con la mayor diferencia de temperatura:");
  console.log("Fecha:", new Date(dayWithLargestDifference.time * 1000));
  console.log("Temperatura Máxima:", dayWithLargestDifference.temperatureMax, "°C");
  console.log("Temperatura Mínima:", dayWithLargestDifference.temperatureMin, "°C");
  console.log("Diferencia de Temperatura:", dayWithLargestDifference.temperatureMax - dayWithLargestDifference.temperatureMin, "°C");
  