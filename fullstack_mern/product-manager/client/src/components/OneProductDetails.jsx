import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios'


const OneProductDetails = () => {
    const { id } = useParams(); //get the id of the product from the route and put it in a variable
    const history = useHistory(); //so we can redirect after clicking on delete

    const [productDetails, setProductDetails] = useState({}) //a state variable to store information about the product that we get back from the api call.

    //as soon as the product details component renders, make an api call to get one product by id, and store that product in a state variable without infinitely re-rendering the component
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(response => {
                console.log("Response when trying to get one product details", response)
                setProductDetails(response.data[0])
            })
            .catch(err => console.log("ERR:", err))
    }, [])

    const deleteProduct = () => {
        console.log("deleting product", id)
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then(response => {
                console.log("response after deleting->", response)
                history.push('/')
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h3>One Product Detail</h3>
            <Link className="btn btn-primary" to="/">Home</Link>
            <div className="single-card">
                <h2>{productDetails.title}</h2>
                <p>Price: ${productDetails.price}</p>
                <p>Description: {productDetails.description}</p>
                <p>Vegtable:{productDetails.is_veg ? " Yes Vegtable" : " Not a Vegtable"}</p>
                <p>Product ID: {productDetails._id}</p>
                <button onClick={deleteProduct} className="btn btn-danger">Delete {productDetails.title}</button>
                <Link className="btn btn-info" to={`/api/product/update/${productDetails._id}`}>Edit {productDetails.title}</Link>
            </div>
        </div>
    );
};


export default OneProductDetails;