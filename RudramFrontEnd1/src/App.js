import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

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
import DonorRegister from './component/DonorPage/DonorRegister';
import MyRewards from './component/DonorPage/MyRewards';
import CouponBucket from './component/DonorPage/CouponBucket';
import DonorLiveDonor from './component/DonorPage/DonorLiveDonor';
import DonorMyDonation from './component/DonorPage/DonorMyDonation';
import DonorNearbyBloodCenter from './component/DonorPage/DonorNearbyBloodCenter';
import DonorNearbyHospitals from './component/DonorPage/DonorNearbyHospitals';
import DonorNearbyBloodcamps from './component/DonorPage/DonorNearbyBloodcamps';
import DonorTermsConditions from './component/DonorPage/DonorTermsConditions';
import DonorProfile from './component/DonorPage/DonorProfile';
import CheckMobileAndShowCoupons from './component/DonorPage/CheckMobileAndShowCoupons';

// Importing the new HospitalPage components
import NavBar from './component/HospitalPage/NavBar';
import Profile from './component/HospitalPage/Profile';
import HospitalHomePage from './component/HospitalPage/HospitalHomePage';

// Importing the new CampOrganizer components
import CampOrganizerHomePage from './component/CampOrganizerPage/CampOrganizerHomePage';
import CampOrganizerProfile from './component/CampOrganizerPage/CampOrganizerProfile';

// Importing the BloodBankHomePage component
import BloodBankHomePage from './component/BloodBankPage/BloodBankHomePage';
import BloodBankSearchLiveDonor from './component/BloodBankPage/BloodBankSearchLiveDonor';
import BloodBankProfile from './component/BloodBankPage/BloodBankProfile';

// Importing the Patient_Relatives components
import Patient_RelativesHomePage from './component/Patient_Relatives/Patient_RelativesHomePage';
import SearchLiveDonor from './component/Patient_Relatives/SearchLiveDonor';
import LiveDonorList from './component/Patient_Relatives/LiveDonorList';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/educational-corner" element={<EducationalCorner />} />
        <Route path="/user-selection" element={<UserSelection />} />
        <Route path="/patient" element={<Patients/>} />
        <Route path="/donor" element={<Donors />} />
        <Route path="/organizer" element={<Camporganizer />} />
        <Route path="/centre" element={<Bloodbank />} />
        <Route path="/hospital" element={<Hospital />} />

        {/* Donor module routes */}
        <Route path="/donorHomePage" element={<DonorHomePage />} />
        <Route path="/donorregister" element={<DonorRegister />} />
        <Route path="/donorprofile" element={<DonorProfile />} />
        <Route path="/my-rewards/*" element={<MyRewards />} />
        <Route path="/my-rewards" element={<CheckMobileAndShowCoupons />} />
        <Route path="/coupon-bucket" element={<CouponBucket />} />
        <Route path="/donorlive-donor" element={<DonorLiveDonor />} />
        <Route path="/donormy-donations" element={<DonorMyDonation />} />
        <Route path="/donornearby-blood-centers" element={<DonorNearbyBloodCenter />} />
        <Route path="/donornearby-hospitals" element={<DonorNearbyHospitals />} />
        <Route path="/donornearby-blood-camps" element={<DonorNearbyBloodcamps />} />
        <Route path="/donorterms-conditions" element={<DonorTermsConditions />} />

        {/* Hospital module routes */}
        
        <Route path="/hospital/navbar" element={<NavBar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/hospitalHomePage" element={<HospitalHomePage />} />
        

        {/* CampOrganizer module routes */}
        <Route path="/camporganizerhome" element={<CampOrganizerHomePage />} />
        <Route path="/camporganizerprofile" element={<CampOrganizerProfile />} />

        {/* BloodBank module routes */}
        <Route path="/bloodbankhomepage" element={<BloodBankHomePage />} />
        <Route path="/bloodbanksearch-livedonor" element={<BloodBankSearchLiveDonor />} />
        <Route path="/bloodbankprofile" element={<BloodBankProfile />} />

        {/* Patient_Relatives module routes */}
        <Route path="/patientrelativeshome" element={<Patient_RelativesHomePage />} />
        <Route path="/search-livedonor" element={<SearchLiveDonor />} />
        <Route path="/livedonor-list" element={<LiveDonorList />} />

      </Routes>
    </Router>
  );
}

export default App;