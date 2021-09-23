import '../../styles/index.scss';
const React = require('react');
import LocationComponent from './Location';
import WeatherInfoComponent from './WeatherInfo';
import WeatherAppContext from '../context/WeatherAppContext';
import { useReducer } from 'react';
import weatherInfoReducer from '../reducer/weatherInfoReducer';
import WeatherInfoClass from '../class/WeatherInfo';
import locationReducer from '../reducer/locationReducer';

const WeatherApp = (props) => {
    const defaultWeatherInfo = new WeatherInfoClass();
    const [weatherInfo, dispatchWeatherInfo] = useReducer(weatherInfoReducer, defaultWeatherInfo);

    const defaultLocation = null;
    const [location, dispatchLocation] = useReducer(locationReducer, defaultLocation);

    return (
        <WeatherAppContext.Provider value={{weatherInfo, dispatchWeatherInfo, location, dispatchLocation}}>
            <h1>Weather App</h1>
            <LocationComponent />
            <WeatherInfoComponent />
        </WeatherAppContext.Provider>
    );
}

export default WeatherApp;