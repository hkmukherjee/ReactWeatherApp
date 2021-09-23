import WeatherInfo from "../class/WeatherInfo";
import IWeatherInfo from "./IWeatherInfo";

export default interface IWeatherAppContext {
    location: string;
    weatherInfo: WeatherInfo;
}