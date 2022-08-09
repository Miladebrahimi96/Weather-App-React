import React,{useContext} from 'react';

//Components
import Forcast from './shared/Forcast';

//Contexts
import { ForcastContext } from '../contexts/ForcastContextProvider';


const Forcasts = () => {

    const forcast = useContext(ForcastContext);
    console.log(forcast);
    
    return (
        <div>
            {
                forcast.list.map(item => <Forcast key={item.dt} data={item} /> )
            }
        </div>
    );
};

export default Forcasts;