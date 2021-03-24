'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 3002;

app.get('/weather', handleWeather);

function handleWeather(request, response) {
    const city = weather.city_name;
    const lat = weather.lat;
    const lon = weather.lon;
    try {
        let array = weather.data.map(day => {
            return new Forecast(day)
        });
        const results = {
            city: city,
            lat: lat,
            lon: lon,
            forecast: array
        };
        response.status(200).json(results);
    } catch (error) {
        response.status(500).send(error.message)
    }
    console.log(error)
}
function Forecast(obj) {
    this.description = obj.weather.description;
    this.date = obj.datetime;
}

//turn on the server
app.listen(PORT, () => {
    console.log(`${PORT}`)
});