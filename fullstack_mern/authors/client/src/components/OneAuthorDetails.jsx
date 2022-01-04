import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { useParams } from 'react-router';

const OneAuthorDetails = (props) => {

    const { id } = useParams();
    const history = useHistory();
    const [authorDetails, setAuthorDetails] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(response => {
                console.log("response when getting one author details", response)
                setAuthorDetails(response.data[0])
            })
            .catch(err => console.log("ERR", err))
    }, [])


    const deleteAuthor = () => {
        console.log("deleting author", id)
        axios.delete(`http://localhost:8000/api/author/delete/${id}`)
            .then(response => {
                console.log("response after deleting->", response)
                history.push('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>ONE AUTHOR DETAILS HERE</h1>
            <div className="author-card">
                <h1>{authorDetails.name}</h1>
                <Link to="/" className="btn btn-primary">Home</Link>
                <Link to={`/api/author/update/${authorDetails._id}`} className="btn btn-primary ms-3">Edit</Link>
                <button onClick={deleteAuthor} className="btn btn-danger ms-3">Delete {authorDetails.name}</button>
            </div>
        </div>
    );
};

export default OneAuthorDetails;