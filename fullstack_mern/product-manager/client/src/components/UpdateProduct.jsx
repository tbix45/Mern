import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react'
import axios from 'axios'


const UpdateProduct = (props) => {
    //combines concepts from showing details about one product and creating a product
    //main difference is it sends a put request after getting the info for that product first

    const { id } = useParams();
    const history = useHistory();

    //form info will be prepopulated
    const [formInfo, setFormInfo] = useState({
        title: "",
        price: "",
        description: "",
        is_veg: false
    })

    const [formErrors, setFormErrors] = useState({
        title: "",
        price: "",
        description: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(response => {
                console.log("Response when trying to get one product details", response)
                setFormInfo(response.data[0])
            })
            .catch(err => console.log("ERR:", err))
    }, [])

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
        //on submit axios call to backend route to update something. it is given an id and ifno to update it with (formInfo). 
        axios.put(`http://localhost:8000/api/product/update/${id}`, formInfo)
            .then(response => {
                console.log(response)

                if (response.data.err) {
                    //if not filled out properly
                    setFormErrors(response.data.err.errors)
                } else {
                    props.setFormSubmitted(!props.formSubmitted)

                    setFormInfo({
                        title: "",
                        price: "",
                        description: "",
                        is_veg: false
                    })

                    setFormErrors({
                        title: "",
                        price: "",
                        description: "",
                    })
                    history.push('/')
                }
                //com
            })
            .catch(err => console.log("error submitting post request -->", err))
    }

    return (
        <div>

            <div className="form">
                <form className="product-form" onSubmit={submitHandler}>
                    <h2>Update Product</h2>
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
                        {formInfo.is_veg ?
                            <input onChange={changeHandler} name="is_veg" type="checkbox" id="is_veg" value={formInfo.is_veg} checked />
                            :
                            <input onChange={changeHandler} name="is_veg" type="checkbox" id="is_veg" value={formInfo.is_veg} />
                        }
                    </div>
                    <button type="submit" className="btn form-button mt-3">Update</button>
                    <Link className="btn btn-primary mt-3" to="/">Home</Link>

                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;