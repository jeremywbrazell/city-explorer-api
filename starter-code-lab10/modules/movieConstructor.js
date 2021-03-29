'use strict';

function Movies(obj){
  this.description =  obj.overview ? obj.overview : 'no description available';
  this.date = obj.original_title;
}

module.exports = Movies;