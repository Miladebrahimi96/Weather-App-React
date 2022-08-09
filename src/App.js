import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./index.css"

import CurrentLanding from './components/CurrentLanding';
import ForcastLanding from './components/ForcastLanding';


const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<CurrentLanding />} />
      <Route path='/forcast' element={<ForcastLanding />} />
    </Routes>
    
    </div>
  );
};

export default App;