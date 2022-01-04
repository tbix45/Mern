import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { useParams } from 'react-router';

const OnePetDetails = (props) => {

    const { id } = useParams();
    const history = useHistory();
    const [petDetails, setPetDetails] = useState({});
    // const [petLikes, setPetLikes] = useState(0);


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(response => {
                console.log("response for one pet details-->", response)
                setPetDetails(response.data[0])
            })
            .catch()
    }, [])

    const deletePet = () => {
        console.log("deleting pet", id)
        axios.delete(`http://localhost:8000/api/pet/delete/${id}`)
            .then(response => {
                console.log("response after deleting->", response)
                history.push('/')
            })
            .catch(err => console.log(err))
    }

    // const likePet = (e, idOfPet) => {
    //     console.log("pet liked", idOfPet)
    //     setPetLikes += 1
    // }

    return (
        <div>
            <h3>Details about {petDetails.name}
                <button onClick={deletePet} className="btn btn-danger ms-3">Adopt {petDetails.name}</button>
                <Link to="/" className="btn btn-primary ms-3">Home</Link>
            </h3>
            <div className="pet-card">
                <p><span>Pet Type:</span> {petDetails.type}</p>
                <p><span>Description:</span> {petDetails.description}</p>
                {
                    petDetails.skill_1 === "" && petDetails.skill_2 === "" && petDetails.skill_3 === "" ? "No Skills!" :
                        <> <p><span>Skills:</span></p>
                            <p>{petDetails.skill_1}</p>
                            <p>{petDetails.skill_2}</p>
                            <p>{petDetails.skill_3}</p>
                        </>
                }
                {/* <p>{petLikes} Like(s)</p>
                <button onClick={(e) => likePet(e, petDetails._id)} className="btn btn-success">Like {petDetails.name} the {petDetails.type}</button> */}
                <Link to={`/api/pet/update/${petDetails._id}`} className="btn btn-primary ms-3">Edit</Link>
            </div>
        </div>
    );
};

export default OnePetDetails;