import React from 'react';

import CurrentWeather from '../components/CurrentWeather';
import LocatonContextProvider from '../contexts/LocationContextProvider';
import WeatherContextProvider from '../contexts/WeatherContextProvider';

const CurrentLanding = () => {
    return (
        <LocatonContextProvider>
            <WeatherContextProvider>
                <CurrentWeather />
            </WeatherContextProvider>
        </LocatonContextProvider>
    );
};

export default CurrentLanding;