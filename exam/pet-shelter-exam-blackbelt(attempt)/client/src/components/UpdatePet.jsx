import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const UpdatePet = (props) => {

    const { id } = useParams();
    const history = useHistory();

    const [formInfo, setFormInfo] = useState({
        name: "",
        type: "",
        description: "",
        skill_1: "",
        skill_2: "",
        skill_3: ""
    });

    const [formErrors, setFormErrors] = useState({
        name: "",
        type: "",
        description: "",
        skill_1: "",
        skill_2: "",
        skill_3: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(response => {
                console.log("Response when trying to get one pet details", response)
                setFormInfo(response.data[0])
            })
            .catch(err => console.log("ERR:", err))
    }, [])

    const changeHandler = (e) => {
        console.log("Changing the form")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form info submitted!", formInfo)
        axios.post("http://localhost:8000/api/pet/create", formInfo)
            .then(response => {
                console.log(response)
                if (response.data.err) {
                    setFormErrors(response.data.err.errors)
                } else {
                    //on submit axios call to backend route to update something. it is given an id and ifno to update it with (formInfo). 
                    axios.put(`http://localhost:8000/api/pet/update/${id}`, formInfo)
                        .then(response => {
                            console.log(response)

                            history.push("/")
                        })
                        .catch(err => console.log("error when updating-->", err))

                }
            })
    }

    return (
        <div className="container">
            <Link className="btn btn-primary" to="/">Home</Link>
            <form onSubmit={submitHandler} className="pet-form">
                <p>Edit {formInfo.name}</p>
                <div className="form-group">
                    <label htmlFor="name">Pet Name:</label>
                    <input onChange={changeHandler} type="text" name="name" id="name" value={formInfo.name} />
                    <p className="text-danger">{formErrors.name?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="name">Pet Type:</label>
                    <input onChange={changeHandler} type="text" name="type" id="name" value={formInfo.type} />
                    <p className="text-danger">{formErrors.type?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="name">Pet Description:</label>
                    <input onChange={changeHandler} type="text" name="description" id="name" value={formInfo.description} />
                    <p className="text-danger">{formErrors.description?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="name">Skill 1:</label>
                    <input onChange={changeHandler} type="text" name="skill_1" id="name" value={formInfo.skill_1} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Skill 2:</label>
                    <input onChange={changeHandler} type="text" name="skill_2" id="name" value={formInfo.skill_2} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Skill 3:</label>
                    <input onChange={changeHandler} type="text" name="skill_3" id="name" value={formInfo.skill_3} />
                </div>
                <div>
                    <div className="form-buttons mt-3">
                        <input type="submit" value="Submit Changes" className="btn btn-primary" />
                        {/* <Link className="btn btn-info" to="/">Cancel</Link> */}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdatePet;