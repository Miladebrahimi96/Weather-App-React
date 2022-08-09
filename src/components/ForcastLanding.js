import React from 'react';

//Contexts
import LocatonContextProvider from '../contexts/LocationContextProvider';
import ForcastContextProvider from '../contexts/ForcastContextProvider';

const ForcastLanding = () => {
    return (
        <LocatonContextProvider>
            <ForcastContextProvider>

            </ForcastContextProvider>
        </LocatonContextProvider>
    );
};

export default ForcastLanding;