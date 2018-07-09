import axios from 'axios';

const API_KEY = '8a4d6b1c7ba53faa5b10c6f1425ab754';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';



export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},pk`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}