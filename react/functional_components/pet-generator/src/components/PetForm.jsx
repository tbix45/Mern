import React, { useState } from 'react';
import styles from './PetForm.module.css';

const PetForm = (props) => {
    // let [name, setName] = useState("")
    // let [picurl, setPicurl] = useState("")
    // let [date, setDate] = useState("")
    // let [service, setService] = useState("")

    let [formInfo, setFormInfo] = useState({
        name: "",
        picurl: "",
        date: "",
        service: "",
        favcolor: ""
    })
    let [listofPets, setListofPets] = useState([])

    const changehandler = (e) => {
        console.log("typing in this input", e.target.name)
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }
    const submitPet = (e) => {
        e.preventDefault();
        console.log("Clicked")
        setListofPets([...listofPets, formInfo])
        setFormInfo({
            name: "",
            picurl: "",
            date: "",
            service: "",
            favcolor: ""
        })
        e.target.reset();

    }
    const deleteAppointment = (e, idx) => {
        console.log("Deleted", e + " at index", idx)
        let newlistofpets = listofPets.filter((pet, i) => {
            return i != idx
        })
        console.log(newlistofpets)
        setListofPets(newlistofpets)
    }
    return (
        <>
            <div className="formstuff">

                <form onSubmit={submitPet} className="form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input onChange={changehandler} type="text" name="name" id="name" className="form-control" />
                        {/* {
                        formInfo.name.length < 2 && formInfo.name.length != 0 ?
                            <p className="text-danger">Name must be at least 2 characters long!</p>
                            : <p></p>
                    } */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="picture">Picture:</label>
                        <input onChange={changehandler} type="text" name="picurl" id="picture" className="form-control" />
                        {/* {
                        formInfo.picurl.length != 0 && formInfo.picurl.length < 2 ?
                            <p className="text-danger">Picture URL must be 2 characters!</p>
                            : <p></p>
                    } */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <input onChange={changehandler} type="date" name="date" id="date" className="form-control" />
                        {/* {
                        formInfo.date.length < 1 ?
                            <p className="text-danger">Pick a date!</p>
                            : <p></p>
                    } */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="favcolor">Favorite Color:</label>
                        <input onChange={changehandler} type="text" name="favcolor" id="favcolor" className="form-control" />
                    </div>
                    <div className="form-group " >
                        <label htmlFor="service">Pick a Service:</label>
                        <select onChange={changehandler} name="service" id="service" className="form-select">
                            <option value="" hidden>Please Select One</option>
                            <option value="Level 1 - Basic Bath">Level 1 - Basic Bath</option>
                            <option value="Level 2 - Better Bath">Level 2 - Better Bath</option>
                            <option value="Level 3 - Best Bath">Level 3 - Best Bath</option>
                        </select>
                        {/* {
                        formInfo.service.length < 1 && formInfo.service.length != 0 ?
                            <p className="text-danger">Select a service!</p>
                            : <p></p>
                    } */}
                        <input type="submit" className="btn btn-success mt-3" value="Submit" />
                    </div>
                </form>
                <div className="petcard">
                    <h2>Your Appointment</h2>
                    <h4>{formInfo.name}</h4>
                    <img src={formInfo.picurl} height="200px" />
                    <p>Date of Appointment: {formInfo.date}</p>
                    <p>Favorite Color: {formInfo.favcolor}</p>
                    <p>Choosen Service: {formInfo.service}</p>
                </div>
            </div>
            <hr />
            <h1>All Appointments</h1>
            <div className="allpetcards">
                {
                    listofPets.map((petcard, i) => {
                        return (
                            <div key={i} className="bookedpet" className={styles.petcardtext} style={{ backgroundColor: petcard.favcolor }} >
                                <h1>{petcard.name} is Booked!</h1>
                                <img src={petcard.picurl} height="200px" />
                                <h6>{petcard.date}</h6>
                                <h6>{petcard.service}</h6>
                                <h6>{petcard.favcolor}</h6>
                                <h6>{petcard.service}</h6>
                                <button onClick={(e) => deleteAppointment(e, i)} className="btn btn-danger">Delete</button>

                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default PetForm;