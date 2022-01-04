import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Info = () => {
    const { id, category } = useParams();
    const [info, setInfo] = useState({});
    const [homeworld, setHomeworld] = useState({})

    useEffect(() => {
        //need to make api call to search category and id 
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response => {
                console.log(response)
                setInfo(response.data)
                axios.get(`${response.data.homeworld}`)
                    .then(response => {
                        console.log(response)
                        console.log(response.data)
                        setHomeworld(response.data)
                    })
                    .catch(err => {
                        console.log(err);
                        setHomeworld({ err })
                    })
            })
            .catch(err => {
                console.log(err);
                setInfo({ err })
            })
    }, [category, id])

    //trying to get homeworld to display
    // useEffect(() => {
    //     axios.get(`${info.homeworld}`)
    //         .then(response => {
    //             console.log(response.data)
    //             setHomeworld(response.data)
    //         })
    // }, [id])


    return (
        <div className="container">
            <div className="infocard">
                {
                    info.err ?
                        <>
                            <img className="obiwanpic" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.usertesting.com%2Fwp-content%2Fuploads%2F2014%2F05%2FObi-Wan-630x267.png&f=1&nofb=1" alt="Not the droids you are looking for!" />

                        </> :
                        category == "people" ?
                            <>
                                <h2>{info.name}</h2>
                                <p>Birth Year: {info.birth_year}</p>
                                <p className="lowerurl">Url: <a href="{info.homeworld}">{info.homeworld}</a></p>
                                <p>Homeworld: {homeworld.name}</p>
                                <p>Height: {info.height} cm</p>
                                <p>Weight: {info.mass} kg</p>
                                <p>Eye Color: {info.eye_color}</p>
                            </> :
                            category == "planets" ?
                                <>
                                    <h2>{info.name}</h2>
                                    <p>Population: {info.population}</p>
                                    <p>Orbital Period: {info.orbital_period} Days</p>
                                    <p>Climate: {info.climate}</p>
                                    <p>Terrain: {info.terrain}</p>
                                    <p>Gravity: {info.gravity}</p>
                                </> :
                                category == "films" ?
                                    <>
                                        <h2>{info.title}</h2>
                                        <p>Episode: {info.episode_id}</p>
                                        <p>Release Date: {info.release_date}</p>
                                        <p>Produced By: {info.producer}</p>
                                        <h6>Description:</h6>
                                        <p>{info.opening_crawl}</p>
                                    </> :
                                    category == "species" ?
                                        <>
                                            <h2>{info.name}</h2>
                                            <p>Designation: {info.designation}</p>
                                            <p>Classification: {info.classification}</p>
                                            <p>Average Lifespan: {info.average_lifespan}</p>
                                            <p>Average Height: {info.average_height}</p>
                                        </> :
                                        category == "vehicles" ?
                                            <>
                                                <h2>{category}</h2>
                                                <h2>{id}</h2>
                                            </> :
                                            category == "starships" ?
                                                <>
                                                    <h2>{info.name}</h2>
                                                    <p>Class: {info.starship_class}</p>
                                                    <p>Crew: {info.crew} Passengers: {info.passengers}</p>
                                                    <p>Length: {info.length} Meters</p>
                                                    <p>Cargo Capacity: {info.cargo_capacity} Lbs.</p>
                                                    <p>Hyperdrive Rating: {info.hyperdrive_rating}</p>
                                                    <p>Made By: {info.manufacturer}</p>
                                                </> :
                                                <p></p>

                }
            </div >

        </div>
    );
};

export default Info;