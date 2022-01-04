import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Search = () => {

    //store the options in a state variable from the api call
    const [categories, setCategories] = useState([])
    //use history so we can redirect to a new route
    const history = useHistory();
    //state variable to store the info collected in the form
    const [formInfo, setFormInfo] = useState({
        //this object will have keys that match the names of the inputs on the form i want to collect from the form
        category: "people",
        id: ""
    })
    //this will be run each time the form inputs info change. It will help to update the state variable formInfo to what is selected
    const changeHandler = (e) => {
        console.log("changed to", e.target.value) //e.target.value is the information selected or typed in the form
        //update the stare variable containing the formInfo with the values from the inputs
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value,
        }) //e.target.name is the name of the input that was changed --> and this name of the input matches a key in our state variable forminfo
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("submitted", formInfo)
        history.push(`/${formInfo.category}/${formInfo.id}`)

    }

    //when the page first loads up i want to call the starwars api to pre fill the select form with options
    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then(res => {
                console.log("this is the response", res.data)
                console.log(Object.keys(res.data))
                setCategories(Object.keys(res.data))
            })
            .catch(err => console.log(err))
    }, []);


    return (
        <>
            <h1 className="title" style={{ color: "black" }}>The Luke API-Walker</h1>

            <div className="searchbar">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="category">Search For:</label>
                        <select onChange={changeHandler} className="form-select" name="category" id="category">
                            {
                                categories.map((category, i) => {
                                    return <option key={i} value={category}>{category}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="id">Id:</label>
                        <input onChange={changeHandler} type="number" name="id" id="id" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Search" />
                </form>
            </div >
        </>
    );
};

export default Search;