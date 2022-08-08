import React, {useContext, useRef} from 'react';

import Icon from './shared/Icon';

//contexts
import { LocationContext } from '../contexts/LocationContextProvider';
import { WeatherContext } from '../contexts/WeatherContextProvider';

//functions
import { centigrade } from '../helpers/functions';
import { fahrenheit } from '../helpers/functions';

const CurrentWeather = () => {
    const locationData = useContext(LocationContext);
    const weatherData = useContext(WeatherContext);
    console.log(weatherData);

    const degree = useRef();
    
    console.log(degree);

    const clickHandler = () => {
        if(degree.current.innerText.slice(-1) === "C"){
            degree.current.innerText = `${fahrenheit(centigrade(weatherData.main.temp))}° F `;
        }
        else {
            degree.current.innerText = `${centigrade(weatherData.main.temp)}° C `;
        }
    }
 
    return (
        <>
            <div>
                <h2>{locationData.timezone}</h2>
                <Icon />
            </div>
            <div>
                {Object.keys(weatherData).length !== 0 && <h3 title='click to see in fahrenheit' ref={degree} onClick={clickHandler}>{centigrade(weatherData.main.temp)}° C </h3>}
                {Object.keys(weatherData).length !== 0 && <h3>{weatherData.weather[0].description} </h3>}
                
            </div>
            

        </>
    );
};

export default CurrentWeather;