import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const SearchForm = styled.form``;

const LocaleSearch = styled.input``;

const WeatherLocale = styled.div`
  margin: 10px 0 10px 0;
`;

const WeatherWrapper = styled.div``;

const WeatherDetailWrapper = styled.div``;

const Temp = styled.div`
  width: 100%;
`;

const WeatherDetail = styled.div`
  width: 100%;
`;

const Weather = () => {
  const [selectCity, setSelectCity] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
      const CITY_NAME = selectCity;
      const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`;

      // console.log(API_URL);
      // ! npm install dotenv로 해결! (이 외의 .env 파일 문제시 해결방안 정리)

      try {
        const res = await axios.get(API_URL);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWeatherData();
  }, [selectCity]);

  function handleSelectCity(e) {
    // 선택한 도시를 state에 저장
    e.preventDefault();
    setSelectCity(e.target.value);
  }

  return (
    <>
      <WeatherWrapper>
        <SearchForm onSubmit={handleSelectCity}>
          <LocaleSearch required />
        </SearchForm>
        <WeatherLocale>
          Weather in {`${selectCity.toUpperCase()}`}
        </WeatherLocale>
        {/* <div>{mainCondition}</div> */}
        <WeatherDetailWrapper>
          <Temp></Temp>
          <WeatherDetail></WeatherDetail>
        </WeatherDetailWrapper>
      </WeatherWrapper>
    </>
  );
};

export default Weather;
