import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import { Coincontext } from "../../components/context/Coincontext";
import { Link } from "react-router-dom";

const Home = () => {
  const { allcoin, currency } = useContext(Coincontext);
  const [displayCoin, setDisplayCoin] = useState([]);

  const [input, setinput] = useState("");

  const inputhandler = (event) => {
    setinput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allcoin);
    }
  };
  const searchhandler = (event) => {
    event.preventDefault();
    const coins = allcoin.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allcoin);
  }, [allcoin]);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest
          <br /> Crypto Market Place
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace Sign up to
          explore more about cryptos.
        </p>
        <form onSubmit={searchhandler}>
          <input
            type="text"
            onChange={inputhandler}
            value={input}
            placeholder="search crypto......"
            required
            list="coinlist"
          />
          <datalist id="coinlist">
            {allcoin.map((item, index) => (
              <option value={item.name} key={index}></option>
            ))}
          </datalist>

          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="" />
              <p>{item.name + " - " + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={
                item.price_change_percentage_24h <= 0 ? "red" : "green"
              }
            >
              {Math.floor(item.price_change_percentage_24h) * 100}
            </p>
            <p className="market-cap">
              {currency.symbol}
              {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
