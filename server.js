'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const PORT=process.env.PORT || 3002;

app.get('/weather', handleWeather);
    function handleWeather(request, response) {
try{
  let forecastArray = weather.data.map(day => {
    return new Forecast(day)
  })
  response.status(200).send(forecastArray)
} catch (error) {
    response.status(500).send(error.message)
}
}
function Forecast(obj) {
  this.description = obj.weather.description;
  this.date = obj.datetime;
}



//turn on the server!
app.listen(PORT,() => {
    console.log(`${PORT}`)
});