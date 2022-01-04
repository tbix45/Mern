import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios'

const OneSnapshotDetails = () => {
    const { id } = useParams();
    const history = useHistory(); //so we can redirect after clicking on delete

    const [snapshotDetails, setSnapshotDetails] = useState({}) //a state variable to store information about the product that we get back from the api call.

    //as soon as the product details component renders, make an api call to get one product by id, and store that product in a state variable without infinitely re-rendering the component
    useEffect(() => {
        axios.get(`http://localhost:8000/api/snapshot/${id}`)
            .then(response => {
                console.log("Response when trying to get one snapshot details", response)
                setSnapshotDetails(response.data[0])

            })
            .catch(err => console.log("ERR:", err))
    }, [])

    const deleteSnapshot = (e) => {
        console.log("delete you")
        axios.delete(`http://localhost:8000/api/snapshot/delete/${id}`)
            .then(response => {
                console.log("response after deleting->", response)
                history.push('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="details">
            <div className="single-card">
                <h2>{snapshotDetails.title}</h2>
                <p>Written By: {snapshotDetails.name}</p>
                <img src={`http://localhost:8000/${snapshotDetails.photo}`} alt="photo" height="400px" />
                <p>Description: {snapshotDetails.description}</p>
                <button onClick={deleteSnapshot} className="btn btn-danger">Delete {snapshotDetails.title}</button>
                <Link className="btn btn-info" to={`/api/snapshot/update/${snapshotDetails._id}`}>Edit {snapshotDetails.title}</Link>
            </div>
        </div>
    );
};

export default OneSnapshotDetails;