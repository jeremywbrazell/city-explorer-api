'use strict'

require('dotenv').config();
// const weather = require('./weather');
const express = require('express');
const superagent = require('superagent');
const cors = require('cors');
const app = express();
// const { response } = require('express');
const PORT = process.env.PORT || 3002;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

app.use(cors());

app.get('/test', (request, response) => {
    response.send('hello world');
});
app.get('/weather', forecastData);
function Weather(obj) {
    this.description = obj.weather.description;
    this.date = obj.datetime;
}
function forecastData(request, response) {
    console.log(request.body);
    const { lat, lon} = request.query;
    const url = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${WEATHER_API_KEY}&days=7`;
    // const city = weather.city_name;
    // const lat = weather.lat;
    // const lon = weather.lon;
    // const query = {
    //     city: city,
    //     key: process.env.WEATHER_API_KEY
    // }
console.log('testing for response');
    superagent
        .get(url)
        .then(superagentResults => {
            console.log('this is the string we`re looking for',superagentResults);
            const repArray = superagentResults.body.data.map(obj => {
               return new Weather(obj);
            })
            console.log(forecastData)
            response.status(200).send(repArray);
        })
    .catch(err => {
        console.log(err)
        response.status(500).send(err.message)
    })
}
app.use('*', (request, response) => {
    response.status(404).send('404: page not found!')
});

//turn on the server
app.listen(PORT, () => {
    console.log(`${PORT}`)})



