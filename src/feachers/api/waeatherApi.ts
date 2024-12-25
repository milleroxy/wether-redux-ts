import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {base_url, api_key} from "../../utils/constants.ts";
import {WeatherResponse, WeatherInfo} from "../../utils/types.ts";


export const weatherApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: base_url
    }),
    reducerPath: 'weatherApi',
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherInfo, string>({
            query:(city: string) => `?q=${city}&appid=${api_key}&units=metric`,
            keepUnusedDataFor: 60*60,

            transformResponse: (response: WeatherResponse): WeatherInfo => {
                return {
                    city: response.name,
                    country: response.sys.country,
                    temp: response.main.temp,
                    pressure: response.main.pressure,
                    sunset: response.sys.sunset * 1000,
                };
            }
        })
    })
})

export const {useGetWeatherByCityQuery} = weatherApi