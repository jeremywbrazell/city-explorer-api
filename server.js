'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const getWeather = require('./components/weather');
const app = express();

const superagent = require('superagent');
const getMovies = require('./components/getMovies');
app.use(cors());

const PORT = process.env.PORT || 3002;

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const MOVIE_API_KEY = process.env.MOVIE_API_KEY;


app.get('/test', (request, response) => {
    response.send('hello world');
});
app.get('/weather', getWeather);
function Weather(obj) {
    this.description = obj.weather.description;
    this.date = obj.datetime;
}
app.get('/movies', getMovies);
function Weather(obj) {
    this.description = obj.weather.description;
    this.date = obj.datetime;
}

app.use('*', (request, response) => {
    response.status(404).send('404: page not found!')
});

//turn on the server
app.listen(PORT, () => {
    console.log(`${PORT}`)})

      
