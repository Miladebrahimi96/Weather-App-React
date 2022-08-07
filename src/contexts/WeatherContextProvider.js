import React, {useState, useEffect, createContext, useContext} from 'react';


//api
import { getWeather } from '../services/api';

//Context
import { LocationContext } from '../contexts/LocationContextProvider';

export const WeatherContext = createContext()

const WeatherContextProvider = ({children}) => {

    const location = useContext(LocationContext);
    const lat = location.lat;
    const lon = location.lon;

    const [weather, setWeather] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setWeather(await getWeather(lat,lon));
        }
        fetchAPI();
    }, [lat, lon])

    return (
        <WeatherContext.Provider value={weather}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherContextProvider;