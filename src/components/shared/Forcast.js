import React,{useContext} from 'react';

//components
import ForcastIcon from "./ForcastIcon"

//Contexts
import { ForcastContext } from '../../contexts/ForcastContextProvider';

const Forcast = ({data}) => {

    const forcast = useContext(ForcastContext)

    return (
        <div>
            <ForcastIcon data={data}/>
            <p>Date: {data.dt_txt.slice(0,10)}</p>
            <p>Time: {data.dt_txt.slice(11)}</p>
            <p>Weather Condition: <span>{data.weather[0].description}</span></p>
        </div>
    );
};

export default Forcast;