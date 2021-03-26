'use strict'

const getWeatherFromAPI = require('./getWeatherFromAPI');


function getWeather(request, response) {
  const { lat, lon } = request.query;
  // go to the weather API
console.log(lat, lon);
  getWeatherFromAPI(lat, lon, response);
  // get the info
  // return it to the front end
}

module.exports = getWeather;