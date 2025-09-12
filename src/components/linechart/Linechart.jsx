import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const Linechart = ({ historicaldata }) => {
  const [data, setdata] = useState([["date", "prices"]]);

  useEffect(() => {
    let datacopy = [["date", "prices"]];
    if (historicaldata.prices) {
      historicaldata.prices.map((item, index) => {
        datacopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });
      setdata(datacopy);
    } //10/05/2024 gives output like this
    console.log(datacopy);
  }, [historicaldata]);

  return <Chart chartType="LineChart" data={data} height="100%" legendToggle />;
};

export default Linechart;
