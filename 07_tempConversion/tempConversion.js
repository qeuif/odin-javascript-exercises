const convertToCelsius = function(tempInFahrenheit) {
  let tempInCelsius = (tempInFahrenheit - 32) * (5/9) // formula to convert from fahrenheit to celsius
  if (Number.isInteger(tempInCelsius)) {
    return tempInCelsius;
  }
  return parseFloat(tempInCelsius.toFixed(1));
};

const convertToFahrenheit = function(tempInCelsius) {
  let tempInFahrenheit = (tempInCelsius * (9/5) + 32); // formula to convert from celsius to fahrenheit
  if (Number.isInteger(tempInFahrenheit)) {
    return tempInFahrenheit;
  }
  return parseFloat(tempInFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
