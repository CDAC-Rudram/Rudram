import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import FAQ from './component/FAQ';
import EducationalCorner from './component/EducationalCorner';
import UserSelection from './component/UserSelection';
import Patients from './component/Patients';
import Donors from './component/Donors';
import Camporganizer from './component/Camporganizer';
import Bloodbank from './component/Bloodbank';
import Hospital from './component/Hospital';

// Importing the new DonorPage components
import DonorHomePage from './component/DonorPage/DonorHomePage';
import RegisterDonor from './component/DonorPage/RegisterDonor';
import MyRewards from './component/DonorPage/MyRewards';
import CouponList from './component/DonorPage/CouponList';
import CouponHistory from './component/DonorPage/CouponHistory';
import LiveDonor from './component/DonorPage/LiveDonor';
import MyDonation from './component/DonorPage/MyDonation';
import NearbyBloodCenter from './component/DonorPage/NearbyBloodCenter'; // Ensure the import matches the filename
import NearbyHospitals from './component/DonorPage/NearbyHospitals';
import NearbyBloodcamps from './component/DonorPage/NearbyBloodcamps'; // Ensure the import matches the filename
import TermsConditions from './component/DonorPage/TermsConditions';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/educational-corner" element={<EducationalCorner />} />
        <Route path="/user-selection" element={<UserSelection />} />
        <Route path="/patient" element={<Patients />} />
        <Route path="/donor" element={<Donors />} />
        <Route path="/organizer" element={<Camporganizer />} />
        <Route path="/centre" element={<Bloodbank />} />
        <Route path="/hospital" element={<Hospital />} />

        {/* Donor module routes */}
        <Route path="/donorHomePage" element={<DonorHomePage />} />
        <Route path="/donor/profile" element={<RegisterDonor />} />
        <Route path="/donor/my-rewards" element={<MyRewards />} />
        <Route path="/donor/coupon-list" element={<CouponList />} />
        <Route path="/donor/coupon-history" element={<CouponHistory />} />
        <Route path="/donor/live-donor" element={<LiveDonor />} />
        <Route path="/donor/my-donations" element={<MyDonation />} />
        <Route path="/donor/nearby-blood-centers" element={<NearbyBloodCenter />} />
        <Route path="/donor/nearby-hospitals" element={<NearbyHospitals />} />
        <Route path="/donor/nearby-blood-camps" element={<NearbyBloodcamps />} />
        <Route path="/donor/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
