import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const AllPlayers = (props) => {

    const [allPlayers, setAllPlayers] = useState([]);
    const [deleteToggle, setDeleteToggle] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then(response => {
                console.log("response when getting all ninjas-->", response)
                setAllPlayers(response.data)
            })
            .catch(err => console.log('error-->', err))
    }, [props.formSubmitted, deleteToggle])

    const deletePlayer = (id) => {
        console.log("Delete Player:", id)
        axios.delete(`http://localhost:8000/api/player/delete/${id}`)
            .then(response => {
                console.log("response after deleting->", response)
                setDeleteToggle(!deleteToggle)
            })
            .catch()
    }

    return (
        <div className='container'>
            <Link to="/">List</Link> |
            <Link to="/addplayer"> Add Player</Link>
            <table className='table table-bordered'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPlayers.map((player, i) => {
                            return (
                                <tr key={i}>
                                    <th><p>{player.name}</p></th>
                                    <th><p>{player.position}</p></th>
                                    <th><button onClick={(e) => deletePlayer(player._id)} className='btn btn-danger'>Delete</button></th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllPlayers
