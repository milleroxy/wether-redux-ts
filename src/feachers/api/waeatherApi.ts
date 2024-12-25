import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {base_url, api_key} from "../../utils/constants.ts";
import {WeatherResponse} from "../../utils/types.ts";
import { WeatherInfo } from "../../utils/types.ts";

export const weatherApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: base_url
    }),
    reducerPath: 'weatherApi',
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherInfo, string>({
            query:(city: string) => `?q=${city}&appid=${api_key}&units=metric`,
            keepUnusedDataFor: 60*60,
            transformResponse: (
                response: { data: WeatherResponse },
            ): WeatherInfo => {
                const weather = response.data;
                return {
                    city: weather.name,
                    country: weather.sys.country,
                    temp: weather.main.temp,
                    pressure: weather.main.pressure,
                    sunset: weather.sys.sunset * 1000,
                };
            }
        })
    })
})

export const {useGetWeatherByCityQuery} = weatherApi