'use strict'

const superagent = require('superagent');
const Weather = require('./weatherConstructor');

function getWeatherFromAPI(lat, lon, response) {
    // console.log(request.body);
    // const { lat, lon} = request.query;
    console.log(lat,lon,process.env.WEATHER_API_KEY);
    const url = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}&days=7`;

    superagent
        .get(url)
        .then(superagentResults => {
            console.log('this is the string we`re looking for',superagentResults);
            const repArray = superagentResults.body.data.map(obj => {
               return new Weather(obj);
            })
            console.log(getWeatherFromAPI)
            response.status(200).send(repArray);
        })
    .catch(err => {
        console.log(err)
        response.status(500).send(err.message)
    })
}

module.exports = getWeatherFromAPI;