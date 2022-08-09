import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CurrentLanding from './components/CurrentLanding';
// import ForcastContextProvider from './contexts/ForcastContextProvider';
import "./index.css"

const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<CurrentLanding />} />
    </Routes>
    
    </div>
  );
};

export default App;