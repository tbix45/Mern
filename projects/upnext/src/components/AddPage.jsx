import React, { useState, useEffect } from 'react';
import axios from 'axios'
import MovieCard from './MovieCard';

const AddPage = () => {

    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const changeHandler = (e) => {
        e.preventDefault();
        console.log("typing in search")
        setSearch(
            e.target.value
        )
        console.log(e.target.value)
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8e4396a3e29f3d96f6688ad2de5c4e96&language=en-US&query=${search}&page=1&include_adult=false`)
            .then(res => {
                console.log(res.data.results)
                if (!res.errors) {
                    setResults(res.data.results)
                } else {
                    setResults([])
                }
            })
            .catch(err => console.log("ERROR", err))

    }

    return (
        <div className="add-page">
            <div className="container">
                <div className="input">
                    <input onChange={changeHandler} name="search" value={search} type="text" placeholder="Search a Movie" />
                </div>
                <div className="results">
                    {
                        results.length > 0 && (
                            <ul className="results">
                                {
                                    results.map((movie, i) => {
                                        return (

                                            <li key={i}><MovieCard movie={movie}></MovieCard></li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default AddPage;