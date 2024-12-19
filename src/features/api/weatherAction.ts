import {api_key, base_url} from "../../utils/constants.ts";
// import {putMessage, putWeatherInfo} from "../weather/weatherSlice.ts";
// import {AppDispatch} from "../../app/store.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchWeather = createAsyncThunk(
    'fetch/weather',
    async(city: string) => {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
        const data = await response.json();
        return ({
            country: data.sys.country,
            city: data.name,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset * 1000
        })
    }
)



// export const fetchWeather = (city: string) => {
//     return (dispatch: AppDispatch) => {
//         fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
//             .then(result => result.json())
//             .then(data => {
//                 dispatch(putWeatherInfo({
//                     country: data.sys.country,
//                     city: data.name,
//                     temp: data.main.temp,
//                     pressure: data.main.pressure,
//                     sunset: data.sys.sunset * 1000
//                 }))
//                 dispatch(putMessage(''))
//             })
//             .catch(e => {
//                 console.log(e);
//                 dispatch(putMessage('Enter correct city name'));
//             })
//     }
// }