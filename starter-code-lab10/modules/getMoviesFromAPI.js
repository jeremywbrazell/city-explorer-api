'use strict'

const superagent = require('superagent');
const Movies = require('./movieConstructor');

function getMoviesFromAPI(movies, response) {
    // const { lat, lon} = request.query;
    console.log(movies,process.env.MOVIE_API_KEY);
    const url = `https://api.themoviedb.org/3/search/movie/?api_key=${process.env.MOVIE_API_KEY}&query=${movies}`;

    superagent
        .get(url)
        .then(superagentResults => {
            console.log('MOVIES MOVIES MOVIES',superagentResults.body);
            const repArray = superagentResults.body.results.map(obj => {
               return new Movies(obj);
            })
            console.log(repArray)
            response.status(200).send(repArray);
        })
    .catch(err => {
        console.log(err)
        response.status(500).send(err.message)
    })
}

module.exports = getMoviesFromAPI;