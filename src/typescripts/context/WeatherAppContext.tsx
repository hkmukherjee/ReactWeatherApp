const React = require('react');
import WeatherInfo from "../class/WeatherInfo";
import IWeatherAppContext from "../interface/IWeatherAppContext";

const defaultContext: IWeatherAppContext = {
    location: null,
    weatherInfo: new WeatherInfo()
};

const WeatherAppContext = React.createContext(defaultContext);

export default WeatherAppContext;