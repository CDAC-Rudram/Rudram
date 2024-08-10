import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './component/Home';
import NearbyHospitals from './component/NearbyHospitals';
import MyDonation from './component/MyDonation';
import NearbyBloodcamps from './component/NearbyBloodcamps';
import Navbar from './component/Navbar';
import NearbyBloodCenter from './component/NearbyBloodCenter';
import RegisterDonor from './component/RegisterDonor';
import MyCoupons from './component/MyCoupons';
import LiveDonor from './component/LiveDonor';
import TermsConditions from './component/TermsConditions';
import Profile from './component/Profile';

function App() {
  return (
    <Router>
     
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterDonor />} />
        <Route path="/my-coupons" element={<MyCoupons />} />
        <Route path="/live-donor" element={<LiveDonor />} />
        <Route path="/profile" element={<Profile />} />
          <Route path="/my-donations" element={<MyDonation />} />
        <Route path="/nearby-blood-centers" element={<NearbyBloodCenter />} />
        <Route path="/nearby-hospitals" element={<NearbyHospitals />}  />
        <Route path="/nearby-blood-camps" element={<NearbyBloodcamps />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        
        </Routes>
     
    </Router>
  );
}

export default App;
