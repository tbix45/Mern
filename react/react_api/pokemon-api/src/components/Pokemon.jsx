import React, { useState } from 'react';

const Pokemon = () => {
    let [allPokemon, setAllPokemon] = useState([])
    const getPokemon = () => {
        console.log("trying to catch pokemon!")
        fetch("https://pokeapi.co/api/v2/pokemon?limit=806&offset=200")
            .then(response => {
                return response.json();
            }).then(response => {
                console.log("response is", response)
                //put the info from the response into our state variable (must be saved in global state variable, to access it outside of the .then)
                setAllPokemon(response.results);
            }).catch(err => {
                console.log(err);

            });
    }
    return (
        <div>
            <button className="btn btn-success" onClick={getPokemon}>Catch the Pokemon!</button>
            <div className="container">
                {
                    allPokemon.map((pokemon, i) => {
                        return (
                            <div key={i} className="pokemonCard">
                                <div className="pokeprops">
                                    <h2>{pokemon.name}</h2>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
};

export default Pokemon;