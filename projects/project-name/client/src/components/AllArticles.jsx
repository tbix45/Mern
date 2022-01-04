import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Search from './Search';

const AllArticles = () => {
    const Key = "7ca7a6ebf47d4ddeaa7e96a01620bc99";
    // const [searchedArticles, setSearchedArticles] = useState([]);
    const [allArticles, setAllArticles] = useState([]);
    // const [searchterm, setSearchterm] = useState("")


    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&apiKey=${Key}`)
            .then(response => {
                console.log("API response is-->", response)
                setAllArticles(response.data.articles)
            })
            .catch(err => console.log("Error", err))
    }, []);


    // const changeHandler = (e) => {
    //     console.log("Changing search")
    //     setSearchterm(
    //         e.target.value
    //     )
    //     console.log("searching", searchterm)
    // }
    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log("submitting form")
    //     console.log(searchterm)
    //     axios.get(`https://newsapi.org/v2/everything?qInTitle=${searchterm}&sortBy=popilarity&apiKey=${Key}`)
    //         .then(response => {
    //             console.log("API response is-->", searchterm, response)
    //             setSearchedArticles(response.data.articles)
    //         })
    //         .catch(err => console.log("Error", err))
    // }

    return (
        <>
            <h2>Top Headlines</h2>
            <div className="news-container">
                {
                    allArticles.map((article, i) => {
                        return (
                            <div className="article-card">
                                <Link to={`/article/${[i]}`}>
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

export default AllArticles;



