import { createContext, useEffect, useState } from "react";

export const Coincontext = createContext();

const CoinContextProvider = (props) => {
  const [allcoin, setallcoin] = useState([]);
  const [currency, setcurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchallcoin = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-5PMW3zw65i7RaicoWBg5UA92",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((res) => res.json())
      .then((res) => setallcoin(res))

      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchallcoin();
  }, [currency]);

  const contextvalue = {
    allcoin,
    currency,
    setcurrency,
  };
  return (
    <Coincontext.Provider value={contextvalue}>
      {props.children}
    </Coincontext.Provider>
  );
};

export default CoinContextProvider;
