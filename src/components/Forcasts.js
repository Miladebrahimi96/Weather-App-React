import React,{useContext} from 'react';

//Components
import Forcast from './shared/Forcast';

//Contexts
import { ForcastContext } from '../contexts/ForcastContextProvider';

//styles 
import styles from "./Forcasts.module.css";

const Forcasts = () => {

    const forcast = useContext(ForcastContext);
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                {
                    forcast.list.map(item => <Forcast key={item.dt} data={item} /> )
                }
            </div>
        </div>
    );
};

export default Forcasts;