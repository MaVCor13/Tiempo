function findWindyHour(data, targetDate) {
    // Asumiendo que los datos horarios están almacenados en "hourly"
    const hourlyData = data.hourly.data;
  
    // Convierte la fecha objetivo (targetDate) a un timestamp en segundos
    const targetTimestamp = new Date(targetDate).getTime() / 1000;
  
    let maxWindSpeed = -Infinity;
    let windyHour;
  
    hourlyData.forEach((hour) => {
      // Verifica si la hora actual pertenece al día 7 de octubre
      if (isSameDay(hour.time, targetTimestamp)) {
        if (hour.windSpeed > maxWindSpeed) {
          maxWindSpeed = hour.windSpeed;
          windyHour = hour;
        }
      }
    });
  
    return windyHour;
  }
  
  function isSameDay(timestamp1, timestamp2) {
    const date1 = new Date(timestamp1 * 1000);
    const date2 = new Date(timestamp2 * 1000);
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }
  
  // Define la fecha objetivo (7 de octubre de 2023)
  const targetDate = "2023-10-07";
  
  // Llama a la función para encontrar la hora más ventosa
  const windyHour = findWindyHour(data, targetDate);
  
  // Imprime la hora más ventosa y la velocidad del viento en ese momento
  console.log("Hora más ventosa del 7 de octubre de 2023:");
  console.log("Hora:", new Date(windyHour.time * 1000));
  console.log("Velocidad del Viento:", windyHour.windSpeed, "m/s");
  