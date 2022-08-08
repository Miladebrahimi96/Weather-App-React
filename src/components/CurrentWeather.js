import React, {useContext} from 'react';

//icons
import clearDay from "../assets/icons/Clear-Day.svg";
import clearNight from "../assets/icons/Clear-Night.svg";
import clouds from "../assets/icons/Clouds.svg";
import Rain from "../assets/icons/Rain.svg";
import Snow from "../assets/icons/Snow.svg";
import Drizzle from "../assets/icons/Drizzle.svg";
import Mist from "../assets/icons/Mist.svg";
import Thunderstorm from "../assets/icons/Thunderstorm.svg";

//functions
import { getDayOrNight } from '../helpers/functions';

//contexts
import { LocationContext } from '../contexts/LocationContextProvider';
import { WeatherContext } from '../contexts/WeatherContextProvider';

const CurrentWeather = () => {
    const locationData = useContext(LocationContext);
    const weatherData = useContext(WeatherContext);
    
    const dayOrNight = getDayOrNight()



    console.log(dayOrNight);
    
    return (
        <div>
            <h2>{locationData.timezone}</h2>
            <div>
                {Object.keys(weatherData).length !== 0 && weatherData.weather[0].main=== "Clouds" && <img src={clouds}alt='condition'/>}
                {Object.keys(weatherData).length !== 0 && weatherData.weather[0].main=== "Rain" && <img src={Rain}alt='condition'/>}
                {Object.keys(weatherData).length !== 0 && weatherData.weather[0].main=== "Snow" && <img src={Snow}alt='condition'/>}
                {Object.keys(weatherData).length !== 0 && weatherData.weather[0].main=== "Mist" && <img src={Mist}alt='condition'/>}
                {Object.keys(weatherData).length !== 0 && weatherData.weather[0].main=== "Drizzle" && <img src={Drizzle}alt='condition'/>}
                {Object.keys(weatherData).length !== 0 && weatherData.weather[0].main=== "Thunderstorm" && <img src={Thunderstorm}alt='condition'/>}
                {Object.keys(weatherData).length !== 0 && weatherData.weather[0].main=== "Clear-Day" && dayOrNight === "Day" && <img src={clearDay}alt='condition'/>  }
                {Object.keys(weatherData).length !== 0 && weatherData.weather[0].main=== "Clear-Night" && dayOrNight === "Night" && <img src={clearNight}alt='condition'/>  }
            </div>

        </div>
    );
};

export default CurrentWeather;