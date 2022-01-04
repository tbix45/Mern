import React, { useEffect, useState } from 'react';
import axios from 'axios'





const AllCoins = () => {
    let [allCoins, setAllCoins] = useState([])
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false")
            .then(response => {
                console.log("response for coins in-->", response)
                setAllCoins(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);


    return (
        <div>
            <button className="btn btn-primary">Get All Coins</button>
            <div className="container" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/daily/?space')" }}>
                {
                    allCoins.map((coin, i) => {
                        return (
                            <div className="coincard coin-container" key={i}>
                                <div className="overlay">Add to Favorites</div>
                                <h2>{coin.name}</h2>
                                <p>${coin.current_price}</p>
                                <p>24hr Change: <span>{coin.price_change_percentage_24h}%</span></p>
                                <img src={coin.image} height="75px" width="75px" />
                                <p>${coin.market_cap}</p>
                                <p>24hr Market Cap Change <span>{coin.market_cap_change_percentage_24h}%</span></p>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
};

// const Coin = props => {
//     const [allCoins, setAllCoins] = useState([])
//     useEffect(() => {
//         axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false")
//             .then(response => setAllCoins(response))
//             .catch(err => {
//                 console.log("err")
//             })
//     }, []);
//     return (
//         <div>
//             {allCoins.map((coin, i) => {
//                 return (
//                     <h2 key={i}>{coin.name}</h2>
//                 )
//             })}
//         </div>
//     )

// }
export default AllCoins;
