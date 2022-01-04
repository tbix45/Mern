import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'




const Search = () => {

    const history = useHistory();
    const [searchterm, setSearchterm] = useState("")
    const [searchedArticles, setSearchedArticles] = useState([]);
    const Key = "7ca7a6ebf47d4ddeaa7e96a01620bc99";

    const changeHandler = (e) => {
        console.log("Changing search")
        setSearchterm(
            e.target.value
        )
        console.log("searching", searchterm)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitting form")
        console.log(searchterm)
        axios.get(`https://newsapi.org/v2/everything?qInTitle=${searchterm}&sortBy=popilarity&apiKey=${Key}`)
            .then(response => {
                console.log("API response is-->", searchterm, response)
                setSearchedArticles(response.data.articles)
                history.push("/searched")
            })
            .catch(err => console.log("Error", err))
    }
    return (
        <>
            <div>
                <form onSubmit={submitHandler}>
                    <label htmlFor="search">Search:</label>
                    <input onChange={changeHandler} name="search" type="text" id="search" placeholder="Search a Topic" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className="news-container">
                {
                    searchedArticles.map((article, i) => {
                        return (
                            <div className="article-card">
                                <Link to={`/sarticle/${[i]}`}>
                                    <img src={article.urlToImage} alt="article photo" width="250px" />
                                    <h3>{article.title}</h3>
                                    <p>By: {article.author}</p>
                                    <p>{article.description}</p>
                                </Link>
                                <a href={`${article.url}`}>Read on Original Site</a>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Search;