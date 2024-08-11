import React from 'react';
import { Link } from 'react-router-dom';
import './DonorHomePage.css'; // Ensure this file exists
import EducationalCornerDonor from './EducationalCornerDonor'; // Ensure this import is correct

function DonorHomePage() { // Change function name to DonorHomePage
  return (
    <div className="home">
      <div className="main-buttons">
        <Link to="/my-donations" className="main-button">My Donations</Link>
        <Link to="/nearby-blood-centers" className="main-button">Near By Blood Centers</Link>
        <Link to="/nearby-hospitals" className="main-button">Near By Hospitals for Blood Donation</Link>
        <Link to="/nearby-blood-camps" className="main-button">Blood Camps</Link>
      </div>
      <EducationalCornerDonor />
    </div>
  );
}

export default DonorHomePage; // Export as DonorHomePage
