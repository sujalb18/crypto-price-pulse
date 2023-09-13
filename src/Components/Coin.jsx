import React from "react";
import './Coin.css'

const Coin = ({
  key,
  coin_name,
  image,
  current_price,
  price_change,
  market_cap,
}) => {
  return (
    <>
      <div className="coincontainer">
        <div className="firstcol">
          <img src={image} width={40} alt="" />
          <p>{coin_name}</p> 
        </div>
        <div className="seccol">
          <p>₹{current_price}</p>
          {price_change < 0 ? (<p className="redcolor">{price_change}</p>) : (<p className="greencolor">{price_change}</p>)}
          
          <p>Market Cap: 
            ₹{market_cap}
          </p>
        </div>
      </div>
    </>
  );
};

export default Coin;
