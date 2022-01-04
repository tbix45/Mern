import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div>
            <div className="movie-card">
                <div className="poster">
                    {movie.poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                    ) : (
                        <div className="missing-poster"></div>
                    )}
                </div>
                <div className="info">
                    <div className="header">
                    </div>
                    <h4>{movie.title}</h4>
                    <p>{movie.release_date ? movie.release_date.substring(0, 4) : ""}</p>
                    <p>{movie.overview}</p>
                </div>
                <div className="actions">
                    <button className="btn btn-primary">Add To Watchlist</button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;