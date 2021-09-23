import { useState, useContext, useEffect } from "react";
import WeatherAppContext from "../context/WeatherAppContext";
const React = require('react');
import axios from "axios";

const WeatherInfo = (props) => {
    const {weatherInfo, location} = useContext(WeatherAppContext);    
    const [currentTemp, setCurrentTemp] = useState(weatherInfo.temprature);
    const [note, setNote] = useState(weatherInfo.note);

    useEffect(() => {
        if(location) {
            axios
            .get(`http://localhost:5000/weatherInfo/${location}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((response) => {
                const {current} = response.data;
                setCurrentTemp(current.temp_c);
                setNote(current.condition.text);
            })
        }
    }, [location]);

    return (
        <>
            <h4>Weather Info</h4>
            <p>Location: {location}</p>
            <p>Current Temp: {currentTemp}</p>
            <p>Note: {note}</p>
        </>
    );
}

export default WeatherInfo;