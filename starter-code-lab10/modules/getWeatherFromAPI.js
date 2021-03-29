'use strict'

const superagent = require('superagent');
const Weather = require('./weatherConstructor');

function getWeatherFromAPI(lat, lon, response) {
 
    const url = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}&days=7`;

    superagent
        .get(url)
        .then(superagentResults => {
            const repArray = superagentResults.body.data.map(obj => {
               return new Weather(obj);
            })
        
            response.status(200).send(repArray);
        })
    .catch(err => {
        console.log(err)
        response.status(500).send(err.message)
    })
}

module.exports = getWeatherFromAPI;