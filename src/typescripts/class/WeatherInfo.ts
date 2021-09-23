import IWeatherInfo from '../interface/IWeatherInfo';

export default class WeatherInfo implements IWeatherInfo {
    constructor(
        location: string = null, 
        temprature: string = null, 
        note: string = null
    )
    {
        this.location = location;
        this.temprature = temprature;
        this.note = note;
    }

    location: string;
    temprature: string;
    note: string;
}