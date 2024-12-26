import {useGetWeatherByCityQuery} from "../feachers/api/waeatherApi.ts";
import {useAppSelector} from "./app/hooks.ts";


const Weather = () => {

    const city = useAppSelector(state => state.city);
    const { data, error, isLoading } = useGetWeatherByCityQuery(city, {refetchOnMountOrArgChange: 30});

    if(!city) {
        return <div className={'infoWeath'}>Enter city name</div>
    }

    if(isLoading) {
        return <div className={'infoWeath'}>Pending...</div>
    }

    if(error) {
        return <div className={'infoWeath'}>Enter correct city name</div>
    }


    return (
        <div className={'infoWeath'}>
            {!!data &&
                <>
                    <p>Location: {data.country}, {data.city}</p>
                    <p>Temp: {data.temp}</p>
                    <p>Pressure: {data.pressure}</p>
                    <p>Sunset: {new Date(data.sunset).toLocaleTimeString()}</p>
                </>
            }
        </div>
    )
}

export default Weather;