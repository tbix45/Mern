import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const AllAuthors = (props) => {

    const [allAuthors, setAllAuthors] = useState([]);
    const [deleteToggle, setDeleteToggle] = useState(false)


    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then(response => {
                console.log("response when getting all authors-->", response)
                console.log(response.data)
                setAllAuthors(response.data)
            })
            .catch(err => console.log("ERROR", err))
    }, [deleteToggle]);

    const deleteProduct = (e, idOfAuthor) => {
        console.log("deleting author with id", idOfAuthor)
        axios.delete(`http://localhost:8000/api/author/delete/${idOfAuthor}`)
            .then(response => {
                console.log("successful delete of", response)
                setDeleteToggle(!deleteToggle)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <Link to="/new">Add an Author</Link>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAuthors.map((author, i) => {
                            return (
                                <tr key={i}>
                                    <td><Link to={`/api/author/${author._id}`}>{author.name}</Link></td>
                                    <td><Link className="btn btn-info" to={`/api/author/update/${author._id}`}>Edit</Link>
                                        <button onClick={(e) => deleteProduct(e, author._id)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllAuthors;