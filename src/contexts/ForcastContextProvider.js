import React, {useState, useEffect, useContext, createContext} from 'react';

//API
import { getForcast } from '../services/api';

//Context
import { LocationContext } from './LocationContextProvider';

export const ForcastContext = createContext();

const ForcastContextProvider = ({children}) => {

    const [forcast, setForcast] = useState({})

    const location = useContext(LocationContext);
    const lat = location.lat;
    const lon = location.lon;

    useEffect(() => {
        const fetchAPI = async () => {
            setForcast(await getForcast(lat,lon));
        }
        if(lat && lon){
            fetchAPI();
        }
    }, [lat, lon])

    return (
        <>
        {Object.keys(forcast).length !== 0 &&
            <ForcastContext.Provider value={forcast}>
                {children}
            </ForcastContext.Provider>
        }
        </>
    );
};

export default ForcastContextProvider;