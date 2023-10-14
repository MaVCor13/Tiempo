function findEarliestSunriseAndLatestSunset(data, startDate, endDate) {
    // Asumiendo que los datos diarios están almacenados en "daily"
    const dailyData = data.daily.data;
  
    // Convertir las fechas de inicio y fin a timestamps en segundos
    const startTimestamp = new Date(startDate).getTime() / 1000;
    const endTimestamp = new Date(endDate).getTime() / 1000;
  
    let earliestSunriseTime = Infinity;
    let latestSunsetTime = -Infinity;
  
    dailyData.forEach((day) => {
      // Verifica si la fecha actual está dentro del rango de fechas
      if (day.time >= startTimestamp && day.time <= endTimestamp) {
        // Comprueba si el amanecer es más temprano
        if (day.sunriseTime < earliestSunriseTime) {
          earliestSunriseTime = day.sunriseTime;
        }
  
        // Comprueba si el atardecer es más tardío
        if (day.sunsetTime > latestSunsetTime) {
          latestSunsetTime = day.sunsetTime;
        }
      }
    });
  
    return {
      earliestSunrise: new Date(earliestSunriseTime * 1000),
      latestSunset: new Date(latestSunsetTime * 1000),
    };
  }
  
  // Define las fechas de inicio y fin (3 de octubre a 9 de octubre de 2023)
  const startDate = "2023-10-03";
  const endDate = "2023-10-09";
  
  // Llama a la función para encontrar las horas de amanecer y atardecer
  const sunTimes = findEarliestSunriseAndLatestSunset(data, startDate, endDate);
  
  // Imprime las horas de amanecer más temprano y atardecer más tardío
  console.log("Hora del amanecer más temprano:", sunTimes.earliestSunrise);
  console.log("Hora del atardecer más tardío:", sunTimes.latestSunset);
  