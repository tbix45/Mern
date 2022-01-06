import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const GameStatus = (props) => {
    const [allPlayers, setAllPlayers] = useState([]);
    const [deleteToggle, setDeleteToggle] = useState(false);
    const [gameStatus, setGameStatus] = useState('undecided');
    const [btnColor, setBtnColor] = useState("yellow");

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then(response => {
                console.log("response when getting all ninjas-->", response)
                setAllPlayers(response.data)
            })
            .catch(err => console.log('error-->', err))
    }, [props.formSubmitted, deleteToggle])

    const changeStatus = (e) => {
        console.log(`Button ${e.target.value} clicked`);
        setGameStatus(e.target.value);
        // clicking undecided button should make it yellow and all other buttons clear 
        // clicking not playing buttton should make 'not playing' button red and all other clear
        //clicking playing button should make 'playing' button green and all others clear
        gameStatus === "undecided" ? setBtnColor(btnColor) : setBtnColor('white')
        gameStatus === "not-playing" ? setBtnColor("red") : <p></p>
    }

    return (
        <div className='container'>
            <h1>Player Status</h1>
            <div>
                <Link to="/status/game/1">Game 1</Link> |
                <Link to="/status/game/2"> Game 2</Link> |
                <Link to="/status/game/3"> Game 3</Link>
            </div>
            <table className='table table-bordered'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPlayers.map((player, i) => {
                            return (
                                <tr key={i}>
                                    <th><p>{player.name}</p></th>
                                    <th>
                                        <button onClick={changeStatus} className='btn mr-3' name="playing" value="playing">Playing</button>
                                        <button onClick={changeStatus} style={{ backgroundColor: btnColor }} className='btn mr-3' name="not-playing" value="not-playing">Not Playing</button>
                                        <button onClick={changeStatus} style={{ backgroundColor: btnColor }} className='btn' name="undecided" value="undecided">Undecided</button>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div >
    )
}

export default GameStatus
