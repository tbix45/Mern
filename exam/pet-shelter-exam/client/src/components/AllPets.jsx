import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

const AllPets = (props) => {

    const [allPets, setAllPets] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet")
            .then(response => {
                console.log("response when getting all pets-->", response)
                setAllPets(response.data)
            })
            .catch()
    }, []);

    return (
        <div className="container">
            <div className="table-heading">
                <h3>These pets are looking for a good home!</h3>
                <Link to="/new">Add a Pet to the Shelter</Link>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPets.map((pet, i) => {
                            return (
                                <tr key={i}>
                                    <td><Link to={`/api/pet/${pet._id}`}>{pet.name}</Link></td>
                                    <td>{pet.type}</td>
                                    <td><Link to={`/api/pet/${pet._id}`} className="btn btn-warning">Details</Link>
                                        <Link className="btn btn-info ms-3" to={`/api/pet/update/${pet._id}`}>Edit</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllPets;