'use strict'

const getMoviesFromAPI = require('./getMoviesFromAPI');
// console.log('this is a MOVIE String')

function getMovies(request, response) {
  const { movies } = request.query;
  // go to the movie API
// console.log(lat, lon);
  getMoviesFromAPI(movies, response);
  console.log(request.query);
  // get the info
  // return it to the front end
}

module.exports = getMovies;