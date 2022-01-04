import React, { useEffect, useState } from 'react';
import axios from 'axios';

// const Pokemon = (props) => {
//     let [allPokemon, setAllPokemon] = useState([])
//     const getPokemon = () => {
//         console.log("trying to catch pokemon!")
//         axios.get("https://pokeapi.co/api/v2/pokemon?limit=806")
//             .then(response => {
//                 console.log("response is", response.data.results)
//                 //put the info from the response into our state variable (must be saved in global state variable, to access it outside of the .then)
//                 setAllPokemon(response.data.results);
//             }).catch(err => {
//                 console.log(err);
//             });
//     }
//     return (
//         <div>
//             <button className="btn btn-success" onClick={getPokemon}>Catch the Pokemon!</button>
//             <div className="container">
//                 {
//                     allPokemon.map((pokemon, i) => {
//                         return (
//                             <div key={i} className="pokemonCard">
//                                 <div className="pokeprops">
//                                     <h2>{pokemon.name}</h2>
//                                     {/* <p>{pokemon.abilities.ability}</p> */}

//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     );
// };
const Pokemon = props => {
    const [allPokemon, setAllPokemon] = useState([]);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=806&offset=200")
            .then(response => setAllPokemon(response.data.results))
            .catch(err => {
                console.log("err")
            })
    }, []);
    return (
        <>
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.vignette2.wikia.nocookie.net%2Flogopedia%2Fimages%2F2%2F2b%2FPokemon_2D_logo.svg%2Frevision%2Flatest%2Fscale-to-width-down%2F639%3Fcb%3D20170115063554&f=1&nofb=1" alt="" />
            <div className="container">
                {allPokemon.map((poke, i) => {
                    return (
                        <div key={i} className="pokemonCard">
                            <div className="pokeprops">
                                <h2>{poke.name}</h2>
                            </div>
                        </div>
                    )
                }
                )}

            </div>
        </>
    )

}


export default Pokemon;