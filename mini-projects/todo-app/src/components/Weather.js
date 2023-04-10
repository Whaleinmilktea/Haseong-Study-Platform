import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

const WeatherWrapper = styled.div``;

const Weather = () => {
  const [selectCity, setSelectCity] = useState("seoul");

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const CITY_NAME = selectCity;
  const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`;

  axios
    .get(API_URL)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return <WeatherWrapper></WeatherWrapper>;
};

export default Weather;
