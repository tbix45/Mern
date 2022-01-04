import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Movielist = (props) => {
    const [movies, setMovies] = useState([]);

    const key = 'f6549417'
    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?s=star wars&apikey=${key}`)
            .then(response => {
                console.log(response.data.Search)
                setMovies(response.data.Search)
            })
            .catch()
    }, []);

    return (
        <>
            <div className="movie-row row">
                {
                    movies.map((movie, i) => {
                        return (
                            <div className="movie-card" key={i}>
                                <h3>{movie.Title}</h3>
                                <img src={movie.Poster} alt="movie poster" height="60%" />
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Movielist;