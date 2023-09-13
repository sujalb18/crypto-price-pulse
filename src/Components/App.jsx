import React, { useState, useEffect } from "react";
import Coin from "./Coin";
import axios from "axios";
import './App.css'
const App = () => {
  const [search, setsearch] = useState("");
  const [coin, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false",{
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':true
          }
        }
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const theCoin = coin.filter((a_coin) =>
    a_coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleChange = (event) => {
    const searchData = event.target.value;
    setsearch(searchData);
  };
  return (
    <>
      <div className="container">
        <div className="search">
          <form>
            <input
              type="text"
              placeholder="Search Cryptocoin"
              onChange={handleChange}
              value={search}
            />
          </form>
        </div>
        <div className="coins">
        {theCoin.map((coin) => {
          return (
            <Coin
              key={coin.id}
              coin_name={coin.name}
              image={coin.image}
              current_price={coin.current_price}
              price_change={coin.price_change_percentage_24h}
              market_cap={coin.market_cap}
            />
          );
        })}
        </div>
      </div>
    </>
  );
};

export default App;
