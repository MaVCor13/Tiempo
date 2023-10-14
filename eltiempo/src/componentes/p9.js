function getSoilMoistureAtTime(data, timestamp) {
    // Asumiendo que los datos de humedad del suelo están almacenados en "daily"
    const dailyData = data.daily.data;
  
    // Encuentra el registro correspondiente al timestamp dado
    const soilData = dailyData.find((entry) => entry.time === timestamp);
  
    if (soilData && soilData.dataSoilMoisture0to1) {
      const soilMoisture = soilData.dataSoilMoisture0to1;
  
      return `A las 12:00 PM del 9 de octubre de 2023, la humedad del suelo a 0-1 cm de profundidad es: ${soilMoisture}.`;
    } else {
      return 'No se encontraron datos de humedad del suelo para el momento especificado.';
    }
  }
  
  // Define el timestamp para las 12:00 PM del 9 de octubre de 2023 (debes ajustarlo según tus datos)
  const timestampToFind = 1673395200; // Esto es solo un ejemplo
  
  // Llama a la función e imprime el resultado
  console.log(getSoilMoistureAtTime(data, timestampToFind));
  