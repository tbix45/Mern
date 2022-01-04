import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const AuthorForm = () => {

    const history = useHistory()
    const [formInfo, setFormInfo] = useState({
        name: ""
    });

    const [formErrors, setFormErrors] = useState({
        name: ""
    });

    const changeHandler = (e) => {
        console.log("Changing the form!")
        setFormInfo({
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Trying to submit author form!")
        console.log(formInfo)
        axios.post("http://localhost:8000/api/author/create", formInfo)
            .then(response => {
                console.log(response)
                if (response.data.err) {
                    setFormErrors(response.data.err.errors)
                } else {
                    setFormInfo({
                        name: ""
                    })
                    setFormErrors({
                        name: ""
                    })
                    history.push("/")
                }
            })
            .catch(err => console.log("error submitting post request -->", err))
    }

    return (
        <div className="container">
            <Link className="btn btn-primary" to="/">Home</Link>
            <form onSubmit={submitHandler} className="author-form">
                <p>Add a new author:</p>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input onChange={changeHandler} type="text" name="name" id="name" value={formInfo.name} />
                    <p className="text-danger">{formErrors.name?.message}</p>

                    <div className="form-buttons mt-3">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                        <Link className="btn btn-info" to="/">Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};


export default AuthorForm;