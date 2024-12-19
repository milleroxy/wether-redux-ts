import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/weatherAction.ts";

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
        // putWeatherInfo: (state, action) => {
        //     return {...state, weatherInfo: action.payload};
        // },
        // putMessage: (state, action) => {
        //     return {...state, message: action.payload}
        // }
    },

    extraReducers: builder => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.message = 'Loading...'})
            .addCase(fetchWeather.fulfilled, (state, action) =>
            {
                state.weatherInfo = action.payload;
                state.message = '';
            })
            .addCase(fetchWeather.rejected, (state) => {
                state.message = 'Enter correct city name'
            })
    }

})

// export const {putWeatherInfo, putMessage} = weatherSlice.actions;
export default weatherSlice.reducer;