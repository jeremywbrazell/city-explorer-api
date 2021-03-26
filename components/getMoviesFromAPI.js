'use strict'

const superagent = require('superagent');
const Movies = require('./movieConstructor');

function getMoviesFromAPI(movies, response) {
    // const { lat, lon} = request.query;
    console.log(movies,process.env.MOVIE_API_KEY);
    const url = `https://api.themoviedb.org/3/movie/550?api_key=9ae5684eda192c2be2497a00dab46aa8`;

    superagent
        .get(url)
        .then(superagentResults => {
            console.log('MOVIES MOVIES MOVIES',superagentResults);
            const repArray = superagentResults.body.data.map(obj => {
               return new Movies(obj);
            })
            console.log(getMoviesFromAPI)
            response.status(200).send(repArray);
        })
    .catch(err => {
        // console.log(err)
        response.status(500).send(err.message)
    })
}

module.exports = getMoviesFromAPI;