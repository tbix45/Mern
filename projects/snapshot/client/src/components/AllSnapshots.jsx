import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllSnapshots = (props) => {

    const [allSnapshots, setAllSnapshots] = useState([]);
    const [favSnapshots, setfavSnapshots] = useState([]);
    const [deleteToggle, setDeleteToggle] = useState(false);

    //state variable for searchbar
    const [searchterm, setSearchterm] = useState("");


    const addFav = (e, i) => {
        console.log("I like this one")
        console.log(i)
        setfavSnapshots(i)
    }
    //As soon as the component loads up information about all products is fetched by axios and saved in our state variable without infinitely rendering the page.
    useEffect(() => {
        axios.get("http://localhost:8000/api/snapshot") //making api call to our backend route to get all
            .then(response => {
                console.log("response when getting all snapshots-->", response)
                console.log(response.data)
                setAllSnapshots(response.data) //store the info about all the ninjas in our state variable
            })
            .catch(err => console.log("ERROR", err))
    }, [props.formSubmitted, deleteToggle])

    //is being passed the id of the product where we are pressing the delete button
    const deleteSnapshot = (e, idOfSnapshot) => {
        console.log("deleting snapshot with this id", idOfSnapshot)
        axios.delete(`http://localhost:8000/api/snapshot/delete/${idOfSnapshot}`)
            .then(response => {
                console.log("response after deleting->", response)
                setDeleteToggle(!deleteToggle) //each time something gets deleted, we change this variable called deleteToggle to be the opposit of whiat it currently is (true->false) so that in the use effect dependency array it will trigger the axios call to get all ninjas. auto re-render. 
            })
            .catch(err => console.log(err))
    }


    const logSearch = (e) => {
        console.log("changed")
        setSearchterm(e.target.value)
        console.log(searchterm)
    }
    // const updateSnapshot = (e, idOfSnapshot) => {
    //     console.log("Hello", idOfSnapshot)

    // }

    return (
        <>
            <div className="search-bar">
                <form>
                    <div className="form-group">
                        <label htmlFor="search">Search:</label>
                        <input onChange={logSearch} type="text" id="search" name="search" placeholder="Search for a snapshot" />
                    </div>
                </form>
            </div>
            <div className="left-side">

                <div className="all-snapshots-container container-fluid">
                    <div className="row">

                        {allSnapshots.filter((snapshot, i) => {
                            return snapshot.title.toLowerCase().includes(searchterm.toLowerCase())
                        })
                            .map((snapshot, i) => {
                                return (
                                    <>
                                        <div className="card" style={{ backgroundImage: `url(http://localhost:8000/${snapshot.photo})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} >
                                            <Link key={i} to={`api/snapshot/${snapshot._id}`}>
                                                <div className="card-body">
                                                    <h5 className="card-title">{snapshot.title}</h5>
                                                    <h4></h4>                                                    <h6 className="card-subtitle">By: {snapshot.name}</h6>
                                                    {/* <p className="card-text">{snapshot.description}</p> */}
                                                    {/* <img src={`http://localhost:8000/${snapshot.photo}`} alt="photo" height="200px" /> */}
                                                    {/* <button className="btn btn-danger ml-3" onClick={(e) => deleteproduct(e, i)}>Delete</button> */}
                                                </div>
                                            </Link>
                                        </div>
                                        {/* <button onClick={(e) => addFav(e, snapshot._id)}>*</button> */}
                                        {/* <button onClick={(e) => deleteSnapshot(e, snapshot._id)} className="btn btn-danger">Delete</button> */}
                                        {/* <button onClick={(e) => updateSnapshot(e, snapshot._id)}>Edit</button> */}
                                    </>
                                )
                            })
                        }
                    </div>
                </div >
            </div>
        </>
    );
};

export default AllSnapshots;