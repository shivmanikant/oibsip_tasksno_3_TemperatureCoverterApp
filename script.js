function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let convertedTemp;
  
    if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
      convertedTemp = (inputTemp * 9/5) + 32;
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
      convertedTemp = (inputTemp - 32) * 5/9;
    } else {
      convertedTemp = inputTemp;
    }
  
    document.getElementById('outputTemp').textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${outputUnit}`;
  }
  