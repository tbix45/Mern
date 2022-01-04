import React, { useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';

const ProductForm = (props) => {

    const history = useHistory() //use history to redirect to home or anywhere when form submits

    //must match model as well as name tag on form inputs
    const [formInfo, setFormInfo] = useState({
        title: "",
        price: "",
        description: "",
        is_veg: false
    })
    //to store the form validation errors we get
    const [formErrors, setFormErrors] = useState({
        title: "",
        price: "",
        description: ""
    })

    const changeHandler = (e) => {
        console.log("Changing the form!")
        if (e.target.type === "checkbox") {
            setFormInfo({
                ...formInfo,
                [e.target.name]: !formInfo.is_veg
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
        console.log("Form info submitted!")
        console.log(formInfo)
        axios.post("http://localhost:8000/api/product/create", formInfo)
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
                        price: "",
                        description: "",
                        is_veg: false
                    })
                    // clears form errors
                    setFormErrors({
                        title: "",
                        price: "",
                        description: "",
                    })
                    history.push("/")
                }

                //com
            })
            .catch(err => console.log("error submitting post request -->", err))
    }

    return (
        <div className="form">
            <form className="product-form" onSubmit={submitHandler}>
                <h2>Product Manager</h2>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input onChange={changeHandler} name="title" type="text" id="title" value={formInfo.title} />
                    <p className="text-danger">{formErrors.title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input onChange={changeHandler} name="price" type="number" id="price" step=".01" value={formInfo.price} />
                    <p className="text-danger">{formErrors.price?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input onChange={changeHandler} name="description" type="text" id="description" value={formInfo.description} />
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="is_veg">Vegtable?</label>
                    <input onChange={changeHandler} name="is_veg" type="checkbox" id="is_veg" value={formInfo.is_veg} />
                </div>
                <button type="submit" className="btn form-button mt-3">Create</button>
                <Link to="/" className="btn btn-primary mt-3">Home</Link>
            </form>
        </div>
    );
};

export default ProductForm;