import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom'


const UpdateAuthor = (props) => {

    const { id } = useParams();
    const history = useHistory();

    //form info will be prepopulated
    const [formInfo, setFormInfo] = useState({
        name: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(response => {
                console.log("Response when trying to get one author details", response)
                setFormInfo(response.data[0])
            })
            .catch(err => console.log("ERR:", err))
    }, [])

    const changeHandler = (e) => {
        console.log("Changing the form")
        setFormInfo({
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form info submitted!", formInfo)
        //on submit axios call to backend route to update something. it is given an id and ifno to update it with (formInfo). 
        axios.put(`http://localhost:8000/api/author/update/${id}`, formInfo)
            .then(response => {
                console.log(response)
                history.push("/")
            })
            .catch(err => console.log("error when updating-->", err))

    }
    return (
        <div>
            <h3>Update form</h3>
            <div className="container">
                <Link className="btn btn-primary" to="/">Home</Link>
                <form onSubmit={submitHandler} className="author-form">
                    <p>Edit this author:</p>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input onChange={changeHandler} type="text" name="name" id="name" value={formInfo.name} />

                        <div className="form-buttons mt-3">
                            <input type="submit" value="Submit" className="btn btn-primary" />
                            <Link className="btn btn-info" to="/">Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default UpdateAuthor;