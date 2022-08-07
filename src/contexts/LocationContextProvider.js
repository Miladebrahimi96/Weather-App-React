import React, {useState, useEffect, createContext} from 'react';

//API
import { getLocation } from '../api';

export const LocationContext = createContext();

const LocatonContextProvider = (props) => {

    const [location, setLocation] = useState({})

    useEffect(() => {
        const fetchAPI = async () => {
            setLocation(await getLocation());
        }

        fetchAPI();
    }, [])
    

    return (
        <LocationContext.Provider value={location}>
            {props.children}
        </LocationContext.Provider>
    );
};

export default LocatonContextProvider;