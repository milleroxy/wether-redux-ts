import {useState} from "react";
import {fetchWeather} from "../features/api/weatherAction.ts";
import {useAppDispatch} from "../app/hooks.ts";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useAppDispatch();
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(fetchWeather(city))
            setCity('')}}>
            <input onChange={e => setCity(e.target.value)} type="text" value={city} />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;