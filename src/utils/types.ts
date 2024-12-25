import {WebSocket} from "vite";
import Data = WebSocket.Data;

export interface WeatherInfo {
    city?: string,
    country?: string,
    temp?: number,
    pressure?: number,
    sunset?: number | Data
}

export interface WeatherResponse {
    name: string,
    main: {
        temp: number,
        pressure: number
    },
    sys: {
        country: string,
        sunset: number
    }
}