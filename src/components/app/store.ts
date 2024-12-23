import {configureStore} from "@reduxjs/toolkit";
import city from "../../feachers/slices/citySlice"
import {weatherApi} from "../../feachers/api/waeatherApi.ts";

export const store = configureStore({
    reducer: {
        city,
        [weatherApi.reducerPath]: weatherApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export  type AppDispatch = typeof store.dispatch