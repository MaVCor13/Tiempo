function findMostWindyHour(data, targetDate) {
    // Asumiendo que los datos horarios están almacenados en "hourly"
    const hourlyData = data.hourly.data;
  
    // Convierte la fecha objetivo a un timestamp en segundos
    const targetTimestamp = new Date(targetDate).getTime() / 1000;
  
    let mostWindyHour = null;
  
    hourlyData.forEach((hour) => {
      // Verifica si la fecha actual coincide con la fecha objetivo
      if (hour.time === targetTimestamp) {
        if (!mostWindyHour || hour.windSpeed > mostWindyHour.windSpeed) {
          mostWindyHour = {
            time: new Date(hour.time * 1000), // Convierte el timestamp a formato de fecha
            windSpeed: hour.windSpeed, // Velocidad del viento en ese momento
          };
        }
      }
    });
  
    return mostWindyHour;
  }
  
  // Define la fecha objetivo (7 de octubre de 2023)
  const targetDate = "2023-10-07";
  
  // Llama a la función para encontrar la hora más ventosa
  const windyHour = findMostWindyHour(data, targetDate);
  
  // Imprime la hora más ventosa y la velocidad del viento
  if (windyHour) {
    console.log("Hora más ventosa:", windyHour.time);
    console.log("Velocidad del viento en ese momento:", windyHour.windSpeed);
  } else {
    console.log("No se encontraron datos para la fecha especificada.");
  }
  