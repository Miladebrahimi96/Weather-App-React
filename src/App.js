import React from 'react';
import LocatonContextProvider from './contexts/LocationContextProvider';
import WeatherContextProvider from './contexts/WeatherContextProvider';
import "./index.css"

const App = () => {
  return (
    <LocatonContextProvider>
      <WeatherContextProvider>
        
      </WeatherContextProvider>
    </LocatonContextProvider>
  );
};

export default App;