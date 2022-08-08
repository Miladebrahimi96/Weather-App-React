import React from 'react';
import CurrentWeather from './components/CurrentWeather';
import LocatonContextProvider from './contexts/LocationContextProvider';
import WeatherContextProvider from './contexts/WeatherContextProvider';
import "./index.css"

const App = () => {
  return (
    <LocatonContextProvider>
      <WeatherContextProvider>
          <CurrentWeather />
      </WeatherContextProvider>
    </LocatonContextProvider>
  );
};

export default App;