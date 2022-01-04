import React, { useState, useEffect } from 'react';
import axios from 'axios'

const OneMovie = () => {

    const [movies, setMovies] = useState([]);
    const key = 'f6549417'
    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=${key}`)
            .then(response => {
                console.log(response.data)
                setMovies(response.data)
            })
            .catch()
    }, []);
    return (
        <div className="movie-card">
            <h3>{movies.Title}</h3>
            <img src={movies.Poster} alt="movie poster" />
        </div>
    );
};

export default OneMovie;