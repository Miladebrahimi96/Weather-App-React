import React, {useContext} from 'react';

//styles
import styles from "./WeatherDetails.module.css"

//Contexts
import { WeatherContext } from '../../contexts/WeatherContextProvider';

//Functions
import { centigrade } from '../../helpers/functions';

const WeatherDetails = () => {

    const weatherData = useContext(WeatherContext);

    return (
        <div className={styles.container}>
            <p>Max Temperature: {Object.keys(weatherData).length !== 0 && <span>{centigrade(weatherData.main.temp_max)}° C</span>}</p>
            <p>Min Temperature: {Object.keys(weatherData).length !== 0 && <span>{centigrade(weatherData.main.temp_min)}° C</span>}</p>
            <p>Humidity: {Object.keys(weatherData).length !== 0 && <span>{weatherData.main.humidity}%</span>}</p>
            <p>Pressure: {Object.keys(weatherData).length !== 0 && <span>{weatherData.main.pressure}mbar</span>}</p>
            <p>Wind Speed: {Object.keys(weatherData).length !== 0 && <span>{weatherData.wind.speed}km/h</span>}</p>
        </div>
    );
};

export default WeatherDetails;