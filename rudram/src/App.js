import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './component/AboutUs';
import Bloodbank from './component/Bloodbank';
import Camporganizer from './component/Camporganizer';
import Donors from './component/Donors';
import EducationalCorner from './component/EducationalCorner';
import FooterComponent from './component/FooterComponent';
import Home from './component/Home';
import Hospital from './component/Hospital';
import Patients from './component/Patients';
import UserSelection from './component/UserSelection';
import Navbar from './component/Navbar';
import FAQ from './component/FAQ';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/educational-corner" element={<EducationalCorner />} />
        <Route path="/user-selection" element={<UserSelection />} /> {/* Add UserSelection route */}
        <Route path="/patient" element={<Patients />} />
        <Route path="/donor" element={<Donors />} />
        <Route path="/organizer" element={<Camporganizer />} />
        <Route path="/centre" element={<Bloodbank/>} />
        <Route path="/hospital" element={<Hospital />} />
       
      </Routes>
      <FooterComponent/>
    </Router>
  );
}

export default App;
