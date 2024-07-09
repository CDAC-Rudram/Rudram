import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';

import FAQ from './components/FAQ';
import EducationalCorner from './components/EducationalCorner';


import UserSelection from './components/UserSelection'; // Import UserSelection component

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        
        <Route path="/faq" element={<FAQ />} />
        <Route path="/educational-corner" element={<EducationalCorner />} />
       
       
        <Route path="/user-selection" element={<UserSelection />} /> {/* Add UserSelection route */}
        
      </Routes>
    </Router>
  );
}

export default App;
