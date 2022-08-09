import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import "./index.css"

import CurrentLanding from './components/CurrentLanding';
import ForcastLanding from './components/ForcastLanding';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div>
     <Navbar />
      <Routes>
        <Route path='/' element={<CurrentLanding />} />
        <Route path='/forcast' element={<ForcastLanding />} />
        <Route path='/*' element={<Navigate to='/'/>} />
      </Routes>
    
    </div>
  );
};

export default App;