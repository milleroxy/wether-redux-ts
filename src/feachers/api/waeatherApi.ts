import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {base_url, api_key} from "../../utils/constants.ts";
import {WeatherResponse} from "../../utils/types.ts";

export const weatherApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: base_url
    }),
    reducerPath: 'weatherApi',
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherResponse, string>({
            query:(city: string) => `?q=${city}&appid=${api_key}&units=metric`,
            keepUnusedDataFor: 60*60
        })
    })
})

export const {useGetWeatherByCityQuery} = weatherApi