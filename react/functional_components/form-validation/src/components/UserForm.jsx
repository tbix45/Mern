import React, { useState } from "react";

const UserForm = props => {
    const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        }
    };
    const createUser = (e) => {
        e.preventDefault();
        // const newUser = 
        console.log("Welcome")
        // console.log()
    }



    return (
        <form onSubmit={createUser}>
            <h1>Please Fill Out This Form</h1>
            <div className="Form-content">
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" className="form-control" onChange={(e) => (e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" className="form-control" onChange={(e) => (e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" className="form-control" onChange={(e) => (e.target.value)} />
                </div>
                <button className="btn btn-primary mt-3" type="submit">Submit</button>
            </div>
            <div className="Formdata">
                <h3>Your Form Data</h3>
                <h2></h2>
                {/* {/* <h6>First Name: {initialState.firstName}</h6> */}
                {/* <h6>Last Name: {initialState.lastName}</h6>
                <h6>Email: {initialState.email}</h6> */}
            </div>
        </form>

    )
}
export default UserForm