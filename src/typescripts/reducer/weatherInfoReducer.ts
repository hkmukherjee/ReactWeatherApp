import WeatherInfo from "../class/WeatherInfo";
import WeatherInfoReducerAction from "../class/WeatherInfoReducerAction";

const weatherInfoReducer = (
    state: WeatherInfo, 
    action: WeatherInfoReducerAction
) => {
    switch(action.type) {        
        case 'SET':
            return action.weatherInfo;
        default:
            return state;
    }
}

export default weatherInfoReducer;