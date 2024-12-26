import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {base_url, api_key} from "../../utils/constants.ts";
import {WeatherResponse, WeatherInfo} from "../../utils/types.ts";


export const weatherApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: base_url
    }),
    refetchOnMountOrArgChange: 30, // или keepUnusedDataFor: 60*60,
    reducerPath: 'weatherApi',
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherInfo, string>({
            query:(city: string) => `?q=${city}&appid=${api_key}&units=metric`,
            // keepUnusedDataFor: 60*60,

            transformResponse: (data: WeatherResponse) => {
                return {
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset * 1000,
                };
            }
        })
    })
})

export const {useGetWeatherByCityQuery} = weatherApi