import React, { useState } from 'react'
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const AddPlayerForm = (props) => {
    const history = useHistory();
    const [formInfo, setFormInfo] = useState({
        name: "",
        position: ""
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        position: ""
    });


    //changehandler to update the forminfo object with the information from the form as the form is being changed
    const changeHandler = (e) => {
        console.log("changing the form")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value,
        })
    }

    //submithandler to create new player when submited to backend
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/player/create", formInfo)
            .then(response => {
                console.log(response)

                if (response.data.err) {
                    setFormErrors(response.data.err.errors)
                } else {
                    props.setFormSubmitted(!props.formSubmitted)

                    setFormInfo({
                        name: "",
                        position: ""
                    })
                    setFormErrors({
                        name: '',
                        position: ''
                    })
                    history.push("/")
                }
            })
            .catch(err => console.log("error when creating", err))

    }


    return (
        <div>
            <Link to="/">List</Link> |
            <Link to="/addplayer"> Add Player</Link>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input onChange={changeHandler} type="text" name='name' value={formInfo.name} />
                    <p className="text-danger">{formErrors.name?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position:</label>
                    <input onChange={changeHandler} type="text" name='position' value={formInfo.position} />
                    <p className="text-danger">{formErrors.position?.message}</p>
                </div>
                <input type="submit" value="Add Player" className='btn btn-success' />
            </form>
        </div>
    )
}

export default AddPlayerForm
