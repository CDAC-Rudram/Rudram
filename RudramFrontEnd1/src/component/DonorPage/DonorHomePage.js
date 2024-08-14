import React from 'react';
import { Link } from 'react-router-dom';
import './DonorHomePage.css'; // Ensure this file exists
import DonorEducationalCorner from './DonorEducationalCorner'; // Ensure this import is correct
import DonorNavbar from './DonorNavbar';

function DonorHomePage() { // Change function name to DonorHomePage
  return (
    <div>
      <DonorNavbar />
    <div className="donorhome">
      <div className="dmain-buttons">
        
        <Link to="/donornearby-blood-centers" className="dmain-button">Near By Blood Centers</Link>
        <Link to="/donornearby-hospitals" className="dmain-button">Near By Hospitals for Blood Donation</Link>
        
      </div>
      <DonorEducationalCorner />
    </div>
    </div>
  );
}

export default DonorHomePage; // Export as DonorHomePage
