function getElevation(data) {
    // Asumiendo que la elevación está almacenada en el campo "elevation" en los datos
    const elevation = data.elevation;
  
    if (elevation !== undefined) {
      return `La elevación de la ubicación es de ${elevation} metros sobre el nivel del mar.`;
    } else {
      return 'No se encontraron datos de elevación en los datos meteorológicos.';
    }
  }
  
  // Llama a la función e imprime el resultado
  console.log(getElevation(data));
  