import React, {useContext, useRef, useState} from 'react';

//Styles
import styles from "./CurrentWeather.module.css"


//Components
import Icon from './shared/Icon';
import WeatherDetails from './shared/WeatherDetails';

//contexts
import { LocationContext } from '../contexts/LocationContextProvider';
import { WeatherContext } from '../contexts/WeatherContextProvider';

//functions
import { centigrade,fahrenheit } from '../helpers/functions';


const CurrentWeather = () => {
    const locationData = useContext(LocationContext);
    const weatherData = useContext(WeatherContext);

    const degree = useRef();

    const [isShown, setIsShown] = useState(false);


    const clickHandler = () => {
        if(degree.current.innerText.slice(-1) === "C"){
            degree.current.innerText = `${fahrenheit(centigrade(weatherData.main.temp))}° F `;
        }
        else {
            degree.current.innerText = `${centigrade(weatherData.main.temp)}° C `;
        }
    }
 
    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <h2>{locationData.city} ,{locationData.country}</h2>
                <Icon />
            </div>
            <div>
                <h3 
                    className={styles.degree} 
                    ref={degree} 
                    onClick={clickHandler}>{centigrade(weatherData.main.temp)}° C 
                </h3>
                    <p className={styles.title}>Click on DEGREE see in fahrenheit</p>
                <h3 className={styles.condition}>{weatherData.weather[0].description} </h3>
            </div>
            <button onClick={() => setIsShown(current => !current)}>More details</button>
            {isShown === true && <WeatherDetails />}
        </div>
    );
};

export default CurrentWeather;