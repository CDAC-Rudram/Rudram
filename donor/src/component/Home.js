import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import EducationalCornerDonor from './EducationalCornerDonor';


function Home() {
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

export default Home;
