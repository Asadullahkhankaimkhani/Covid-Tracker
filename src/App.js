/** @format */

import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import CornaImage from "./images/image.png";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    fetchData().then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry({ country: country });
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={CornaImage} alt='Covid-19 ' />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
