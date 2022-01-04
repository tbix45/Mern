import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom'

const OneArticle = (props) => {
    const Key = "7ca7a6ebf47d4ddeaa7e96a01620bc99";

    const { arrayloc } = useParams();
    const history = useHistory();
    const [articleDetails, setArticleDetails] = useState({});

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&from=2021-11-11&sortBy=popularity&apiKey=${Key}`)
            .then(response => {
                console.log("response when getting one article", response)
                setArticleDetails(response.data.articles[arrayloc])
            })
            .catch(err => console.log("ERR", err))
    }, [])


    return (
        <div className="single-article">
            <h2>{articleDetails.title}</h2>
            <h6>By: {articleDetails.author}</h6>
            <img src={articleDetails.urlToImage} alt="article photo" width="40%" />
            <p>{articleDetails.content}</p>
            <p>{articleDetails.description}</p>
        </div>
    );
};

export default OneArticle;