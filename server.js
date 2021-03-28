'use strict';

//libraries
require('dotenv');
const express = require('express');
const cors = require('cors');

//server initialization
const app = express();

// opens up server
app.use(cors());

// require
const weather = require('./starter-code-lab10/modules/weather.js');
const movie = require('./starter-code-lab10/modules/getMovies.js')

// PORT
const PORT = process.env.PORT || 3002;

// routes
app.get('weather', weather)
app.get('/movie', movie);



app.listen(PORT, () => console.log(`Server up on ${process.env.PORT}`));