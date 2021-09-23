import { useContext, useState } from "react";
import LocationReducerAction from "../class/LocationReducerAction";
import WeatherAppContext from "../context/WeatherAppContext";

const React = require('react');

const Location = (props) => {
    const {dispatchLocation} = useContext(WeatherAppContext);
    const [location, setLocation] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        dispatchLocation(new LocationReducerAction('SET', location));
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <input
                type='submit'
                value='Get Details'
            />
        </form>
    );
}

export default Location;