import React from 'react';

//Components
import Forcasts from './Forcasts';

//Contexts
import LocatonContextProvider from '../contexts/LocationContextProvider';
import ForcastContextProvider from '../contexts/ForcastContextProvider';

const ForcastLanding = () => {

    return (
        <LocatonContextProvider>
            <ForcastContextProvider>
                <Forcasts />
            </ForcastContextProvider>
        </LocatonContextProvider>
    );
};

export default ForcastLanding;