import Form from "./form.tsx";
import Weather from "./weather.tsx";
import {useState} from "react";

const Data = () => {
    const[city, setCity] = useState('');

    return (
        <div>
            <Form setCity={setCity}/>
            <Weather city={city}/>
        </div>
    );
};

export default Data;