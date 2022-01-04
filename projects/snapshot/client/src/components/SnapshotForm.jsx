import React, { useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';

const SnapshotForm = (props) => {


    // state of card inpfo


    //must match model as well as name tag on form inputs
    const [formInfo, setFormInfo] = useState({
        title: "",
        name: "",
        description: "",
        photo: ""
    })

    //to store the form validation errors we get
    const [formErrors, setFormErrors] = useState({
        title: "",
        name: "",
        description: ""
    })

    const changeHandler = (e) => {
        console.log("Changing form!")
        if (e.target.type === "file") {
            setFormInfo({
                ...formInfo,
                [e.target.name]: e.target.files[0]
            })
        } else {
            setFormInfo({
                ...formInfo,
                [e.target.name]: e.target.value
            })
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', formInfo.title)
        formData.append('name', formInfo.name)
        formData.append('description', formInfo.description)
        formData.append('photo', formInfo.photo)

        console.log("submitting")
        console.log(formInfo)
        axios.post("http://localhost:8000/api/snapshot/create", formData)
            .then(response => {
                console.log(response)

                if (response.data.err) {
                    //if not filled out properly
                    setFormErrors(response.data.err.errors)
                } else {
                    props.setFormSubmitted(!props.formSubmitted)
                    // this was needed when the form was in same page as all ninjas so that when form submits we can toggle this variable on and off to make so that all ninjas re-renders with the new list of ninjas. 
                    //not needed when the form is on separate routes from form

                    //clears form submission
                    setFormInfo({
                        title: "",
                        name: "",
                        description: "",
                        photo: null
                    })
                    // clears form errors
                    setFormErrors({
                        title: "",
                        name: "",
                        description: "",
                    })
                }
            })
            .catch(err => console.log("error submitting post request -->", err))
    }

    // useEffect(() => {
    //     axios.get(idofclicked)


    // }, [updatetoggle]);
    return (
        <div className="form">
            <form className="product-form" onSubmit={submitHandler} enctype='multipart/form-data'>
                <h2>Create a Snapshot</h2>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input onChange={changeHandler} className="form-control" name="title" type="text" id="title" value={formInfo.title} />
                    <p className="text-danger">{formErrors.title?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="name">Written By:</label>
                    <input onChange={changeHandler} className="form-control" name="name" type="text" id="name" value={formInfo.name} />
                    <p className="text-danger">{formErrors.name?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="description" >Description:</label>
                    <textarea onChange={changeHandler} className="form-control" id="description" name="description" rows="4" cols="20" value={formInfo.description}>
                    </textarea>
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="photo">Upload a Snapshot:</label>
                    <input onChange={changeHandler} className="form-control" type="file" accept=".png, .jpg, .jpeg" name="photo" />
                </div>
                <button type="submit" className="btn form-button mt-3">Create</button>
                {/* <Link to="/" className="btn btn-primary mt-3">Home</Link> */}
            </form>
        </div>
    );
};

export default SnapshotForm;