import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react'
import axios from 'axios'


const UpdateSnapshot = (props) => {
    //combines concepts from showing details about one product and creating a product
    //main difference is it sends a put request after getting the info for that product first

    const { id } = useParams();
    const history = useHistory();

    //form info will be prepopulated
    const [formInfo, setFormInfo] = useState({
        title: "",
        name: "",
        description: "",
    })

    const [snapshotDetails, setSnapshotDetails] = useState({})

    const [formErrors, setFormErrors] = useState({
        title: "",
        name: "",
        description: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/snapshot/${id}`)
            .then(response => {
                console.log("Response when trying to get one snapshot details", response)
                setFormInfo(response.data[0])
                setSnapshotDetails(response.data[0])
            })
            .catch(err => console.log("ERR:", err))
    }, [])

    const changeHandler = (e) => {
        console.log("Changing the form!")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }


    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', formInfo.title)
        formData.append('name', formInfo.name)
        formData.append('description', formInfo.description)
        formData.append('photo', formInfo.photo)

        console.log("Form info submitted!")
        console.log(formInfo)
        //on submit axios call to backend route to update something. it is given an id and ifno to update it with (formInfo). 
        axios.put(`http://localhost:8000/api/snapshot/update/${id}`, formInfo)
            .then(response => {
                console.log(response)

                if (response.data.err) {
                    //if not filled out properly
                    setFormErrors(response.data.err.errors)
                } else {
                    props.setFormSubmitted(!props.formSubmitted)

                    setFormInfo({
                        title: "",
                        name: "",
                        description: "",
                    })

                    setFormErrors({
                        title: "",
                        name: "",
                        description: "",
                    })
                    history.push('/')
                }
                //com
            })
            .catch(err => console.log("error submitting post request -->", err))
    }

    return (
        <div className="container">

            <div className="form">
                <form className="product-form" onSubmit={submitHandler}>
                    <h2>Update Snapshot</h2>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input onChange={changeHandler} name="title" type="text" id="title" value={formInfo.title} />
                        <p className="text-danger">{formErrors.title?.message}</p>

                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Written By:</label>
                        <input onChange={changeHandler} name="name" type="text" id="name" value={formInfo.name} />
                        <p className="text-danger">{formErrors.name?.message}</p>

                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea onChange={changeHandler} id="description" name="description" rows="4" cols="40" value={formInfo.description}>
                        </textarea>
                        <p className="text-danger">{formErrors.description?.message}</p>

                    </div>
                    <img src={`http://localhost:8000/${formInfo.photo}`} alt="photo" height="400px" />
                    <div className="form-group">
                        <label htmlFor="photo">Upload a Snapshot:</label>
                        <input onChange={changeHandler} type="file" accept=".png, .jpg, .jpeg" name="photo" />
                    </div>
                    <button type="submit" className="btn form-button mt-3">Update</button>
                    <Link className="btn btn-primary mt-3" to="/">Home</Link>

                </form>
            </div>
        </div>
    );
};

export default UpdateSnapshot;