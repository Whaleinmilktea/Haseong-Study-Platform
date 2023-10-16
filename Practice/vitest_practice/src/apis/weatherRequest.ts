import axios from 'axios';
import { IWeatherData } from '../library/interfaces/IWeatherInterface';

const openWeatherApi = import.meta.env.VITE_OPENWEATHER_URL;
const apiKEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const location = 'seoul';

const weatherApiClient = axios.create({
  baseURL: openWeatherApi,
});

export const getWeaterData = async () => {
  const response = await weatherApiClient.get<IWeatherData>(`/weather?q=${location}&appid=${apiKEY}`);
  return response.data;
}