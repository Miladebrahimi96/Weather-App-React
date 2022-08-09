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
            <p>Max Temperature: <span>{centigrade(weatherData.main.temp_max)}° C</span></p>
            <p>Min Temperature: <span>{centigrade(weatherData.main.temp_min)}° C</span></p>
            <p>Humidity: <span>{weatherData.main.humidity}%</span></p>
            <p>Pressure: <span>{weatherData.main.pressure}mbar</span></p>
            <p>Wind Speed: && <span>{weatherData.wind.speed}km/h</span></p>
        </div>
    );
};

export default WeatherDetails;