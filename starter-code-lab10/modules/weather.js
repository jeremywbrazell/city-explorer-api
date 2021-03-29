'use strict';

let cache = require('./cache.js');

const superagent = require('superagent');

const getWeatherFromAPI = require('./getWeatherFromAPI');

function getWeather(request, response) {

  const { city_name, lat, lon } = request.query;
  const key = `weather-${lat}-${lon}`;
  const url = `http://api.weatherbit.io/v2.0/forecast/daily`;
 
  const query = {
    key: process.env.WEATHER_API_KEY,
    city: city_name,
    lat: lat,
    lon: lon
  }

  if (cache[key] && (Date.now() - cache[key].timestamp < 70000)) {
   
  } else {
   
    cache[key] = {};
    cache[key].timestamp = Date.now();

  getWeatherFromAPI(lat, lon, response);
  // get the info
  // return it to the front end

}

// superagent
// .get(url)
// .query(query)
// .then(superAgentResults => {
//   console.log(superAgentResults);
//   const weatherArray = parseWeather(superAgentResults.body);
//   weatherArray.then (day => {
//     console.log(weatherArray);
//     cache[key].data = day;
//     response.status(200).send(cache[key].data);
//   })
// })
// .catch(err => {
//   console.log(err)
//   response.status(500).send(err.message, 'Something is wrong!');
// })
}
  
// return cache[key].data;
  

function parseWeather(weatherData) {
  try {
    const weatherSummaries = weatherData.data.map(day => {
      return new Weather(day);
    });
    return Promise.resolve(weatherSummaries);
  } catch (e) {
    return Promise.reject(e);
  }
}

class Weather {
  constructor(day) {
    this.description = 'Low of ${day.low_temp}, High of {day.high_temp} with ${day.weather.description.toLowercase()}';
    this.date = day.datetime;
  }
}
module.exports = getWeather;
