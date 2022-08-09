import React from 'react';

//styles
import styles from "./ForcastIcon.module.css";

//icons
import clearDay from "../../assets/icons/Clear-Day.svg";
import clearNight from "../../assets/icons/Clear-Night.svg";
import clouds from "../../assets/icons/Clouds.svg";
import Rain from "../../assets/icons/Rain.svg";
import Snow from "../../assets/icons/Snow.svg";
import Drizzle from "../../assets/icons/Drizzle.svg";
import Mist from "../../assets/icons/Mist.svg";
import Thunderstorm from "../../assets/icons/Thunderstorm.svg";

//functions
import { getDayOrNight } from '../../helpers/functions';

//contexts

const Icon = ({data, time}) => {

    const condition = data.weather[0].main;

    const hour = time.slice(0,2);
    
    const dayOrNight = getDayOrNight(hour);

    return (
        <div className={styles.container}>
            {condition === "Clouds" && <img src={clouds}alt='condition'/>}
            {condition === "Rain" && <img src={Rain}alt='condition'/>}
            {condition === "Snow" && <img src={Snow}alt='condition'/>}
            {condition === "Mist" && <img src={Mist}alt='condition'/>}
            {condition === "Drizzle" && <img src={Drizzle}alt='condition'/>}
            {condition === "Thunderstorm" && <img src={Thunderstorm}alt='condition'/>}
            {condition === "Clear" && dayOrNight === "Day" && <img src={clearDay}alt='condition'/>  }
            {condition === "Clear" && dayOrNight === "Night" && <img src={clearNight}alt='condition'/>  }
        </div>

        
    );
};

export default Icon;