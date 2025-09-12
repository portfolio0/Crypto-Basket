import React, { useContext, useEffect, useState } from "react";
import "./coin.css";
import { useParams } from "react-router-dom";
import { Coincontext } from "../../components/context/Coincontext";
import Linechart from "../../components/linechart/Linechart";
const Coin = () => {
  const { coinid } = useParams();

  const [coindata, setcoindata] = useState();
  const [historicaldata, sethistoricaldata] = useState();

  const { currency } = useContext(Coincontext);
  console.log(coindata);

  const fetchcoindata = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-5PMW3zw65i7RaicoWBg5UA92",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinid}`, options)
      .then((res) => res.json())
      .then((res) => setcoindata(res))
      .catch((err) => console.error(err));
  };

  const fetchhistoricaldata = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-5PMW3zw65i7RaicoWBg5UA92",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=${currency.name}&days=10`,
      options
    )
      .then((res) => res.json())
      .then((res) => sethistoricaldata(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchcoindata();
    fetchhistoricaldata();
  }, [currency]);
  if (coindata) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coindata.image.large} alt="" />
          <p>
            <b>
              {coindata.name} ({coindata.symbol.toUpperCase()})
            </b>
          </p>
        </div>

        <div className="coin-chart">
          <Linechart historicaldata={historicaldata} />
        </div>

        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coindata.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li>
              {currency.symbol}
              {coindata.market_data.current_price[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>Market Cap</li>
            <li>
              {currency.symbol}
              {coindata.market_data.market_cap[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24 Hour High</li>
            <li>
              {currency.symbol}
              {coindata.market_data.high_24h[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24 Hour Low</li>
            <li>
              {currency.symbol}
              {coindata.market_data.low_24h[currency.name].toLocaleString()}
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
