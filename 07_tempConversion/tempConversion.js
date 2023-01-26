const convertToCelsius = function(temp_f) {
  let celsius_temp = (temp_f - 32) * (5/9);
  return Number(celsius_temp.toFixed(1));
};

const convertToFahrenheit = function(temp_c) {
  let fahrenheit_temp = (temp_c * 1.8) + 32;
  return Number(fahrenheit_temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
