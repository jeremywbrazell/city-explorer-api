'use strict';

function Movies(obj){
  this.description =  `${obj.movies || 'no movies available'} with ${obj.movies.description.toLowerCase()}`;
  this.date = obj.valid_date;
}

module.exports = Movies;