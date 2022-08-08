import React, {useContext} from 'react';

import Icon from './shared/Icon';

//contexts
import { LocationContext } from '../contexts/LocationContextProvider';
import { WeatherContext } from '../contexts/WeatherContextProvider';

const CurrentWeather = () => {
    const locationData = useContext(LocationContext);
    const weatherData = useContext(WeatherContext);
 
    return (
        <div>
            <h2>{locationData.timezone}</h2>
            <Icon />

        </div>
    );
};

export default CurrentWeather;