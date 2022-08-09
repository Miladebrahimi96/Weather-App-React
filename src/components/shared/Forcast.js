import React from 'react';

//styles
import styles from "./Forcast.module.css";
//components
import ForcastIcon from "./ForcastIcon"


const Forcast = ({data}) => {

    const time = data.dt_txt.slice(11);

    return (
        <div className={styles.container}>
            <ForcastIcon data={data} time={time}/>
            <div>
                <p>Date: {data.dt_txt.slice(0,10)}</p>
                <p>Time: {time}</p>
                <p>Weather Condition: <span>{data.weather[0].description}</span></p>
            </div>
        </div>
    );
};

export default Forcast;