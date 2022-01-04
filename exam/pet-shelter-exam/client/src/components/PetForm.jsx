import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const PetForm = () => {

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

    const changeHandler = (e) => {
        console.log("changing the form!")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("trying to submit form")
        console.log(formInfo)
        axios.post("http://localhost:8000/api/pet/create", formInfo)
            .then(response => {
                console.log(response)
                if (response.data.err) {
                    setFormErrors(response.data.err.errors)
                } else {
                    // console.log("No Probs!")
                    setFormInfo({
                        name: "",
                        type: "",
                        description: "",
                        skill_1: "",
                        skill_2: "",
                        skill_3: ""
                    })
                    setFormErrors({
                        name: "",
                        type: "",
                        description: "",
                        skill_1: "",
                        skill_2: "",
                        skill_3: ""
                    })
                    history.push("/")
                }
            })
    }

    return (
        <div className="container">
            <div className="form-container">

                <div className="table-heading2">
                    <h3>Know a pet needing a home?</h3>
                    <Link className="btn btn-primary" to="/">Home</Link>
                </div>
                <form onSubmit={submitHandler} className="pet-form">
                    <div className="form-columns">

                        <div class="col-auto">
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
                        </div>
                        <div class="col-auto">
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
                        </div>
                    </div>
                    <div className="form-buttons mt-3">
                        <input type="submit" value="Add Pet" className="btn btn-primary" />
                        {/* <Link className="btn btn-info" to="/">Cancel</Link> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PetForm;