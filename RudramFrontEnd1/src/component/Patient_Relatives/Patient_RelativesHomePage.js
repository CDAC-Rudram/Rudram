import React from 'react';
import { Link } from 'react-router-dom';
import './Patient_RelativesHomePage.css'; // Ensure this file exists

import PatientNavbar from './PatientNavbar';

function DonorHomePage() { // Change function name to DonorHomePage
  return (
    <div>
      <PatientNavbar />
    <div className="donorhome">
      <div className="dmain-buttons">
        
        <h1>Welcome</h1><br/>
        <h4>You can search live donor here</h4>
      </div>
     
    </div>
    </div>
  );
}

export default DonorHomePage; // Export as DonorHomePage
