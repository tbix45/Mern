import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const AllProducts = (props) => {

    const [allProducts, setAllProducts] = useState([]) //Initialize an array because we retrurn an array of objects. 

    const [deleteToggle, setDeleteToggle] = useState(false)

    //As soon as the component loads up information about all products is fetched by axios and saved in our state variable without infinitely rendering the page.
    useEffect(() => {
        axios.get("http://localhost:8000/api/product") //making api call to our backend route to get all
            .then(response => {
                console.log("response when getting all products-->", response)
                console.log(response.data)
                setAllProducts(response.data) //store the info about all the ninjas in our state variable
            })
            .catch(err => console.log("ERROR", err))
    }, [props.formSubmitted, deleteToggle])
    //will run code inside useEffect hook to re-run each time one of the items in the dependency array changes. will produce our updated list

    //is being passed the id of the product where we are pressing the delete button
    const deleteProduct = (e, idOfProduct) => {
        console.log("deleting product with this id", idOfProduct)
        axios.delete(`http://localhost:8000/api/product/delete/${idOfProduct}`)
            .then(response => {
                console.log("response after deleting->", response)
                setDeleteToggle(!deleteToggle) //each time something gets deleted, we change this variable called deleteToggle to be the opposit of whiat it currently is (true->false) so that in the use effect dependency array it will trigger the axios call to get all ninjas. auto re-render. 
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='body'>
            <Link to="/new" className="btn btn-primary mt-3">Create New</Link>
            <h2>All Products</h2>
            <div className="product-area container">
                {
                    allProducts.map((product, i) => {
                        return (
                            <div>
                                <Link key={i} to={`api/product/${product._id}`}>
                                    <div className="card" style={{ width: "18rem" }} >
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <h6 className="card-subtitle mb-2">${product.price}</h6>
                                            <p className="card-text">{product.description}</p>
                                            {/* <button className="btn btn-danger ml-3" onClick={(e) => deleteproduct(e, i)}>Delete</button> */}
                                        </div>
                                    </div>
                                </Link>
                                <button onClick={(e) => deleteProduct(e, product._id)} className="btn btn-danger">Delete {product.title}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
};

export default AllProducts;