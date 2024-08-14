import React from 'react';
import { useLocation } from 'react-router-dom';
import './LiveDonorList.css';
import PatientNavbar from './PatientNavbar';

const LiveDonorList = () => {
  const location = useLocation();
  const donors = location.state?.donors || [];

  return (
    <div>
      <PatientNavbar />
      <div className="donor-list-container">
        <h2>Live Donors</h2>
        {donors.length > 0 ? (
          <ul className="donor-list">
            {donors.map((donor) => (
              <li key={donor.id}>
                <p><strong>Name:</strong> {donor.fullName}</p>
                <p><strong>Mobile Number:</strong> {donor.mobileNumber}</p>
                <p><strong>State:</strong> {donor.state}</p>
                <p><strong>City:</strong> {donor.city}</p>
                <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No donors found for the selected criteria.</p>
        )}
      </div>
    </div>
  );
};

export default LiveDonorList;
