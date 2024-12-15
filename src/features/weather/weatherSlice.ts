import {createSlice} from "@reduxjs/toolkit";

interface WeatherInfo {
    country: string;
    city: string;
    temp: number;
    pressure: number;
    sunset: number;
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weatherInfo: {} as WeatherInfo,
        message: 'Enter city name'
    },
    reducers: {
        putWeatherInfo: (state, action) => {
            return {...state, weatherInfo: action.payload};
        },
        putMessage: (state, action) => {
            return {...state, message: action.payload}
        }
    }

})

export const {putWeatherInfo, putMessage} = weatherSlice.actions;
export default weatherSlice.reducer;