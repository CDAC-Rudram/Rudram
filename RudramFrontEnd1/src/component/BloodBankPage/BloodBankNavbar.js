import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './BloodBankNavbar.css';

function CampOrganizerNavbar() {
  return (
    <nav className="donornavbar">
      <div className="blooddonorheading">
        <h1>Blood Center</h1>
      </div>
      <Nav className="donornavbar-links">
      <Nav.Link as={Link} to="/bloodbankhomepage" className="donornavbar-item">Home</Nav.Link>
      <Nav.Link as={Link} to="/bloodbankprofile" className="donornavbar-item">Profile</Nav.Link>
      
      <Nav.Link as={Link} to="/bloodbanksearch-livedonor" className="donornavbar-item">Search Live Donor</Nav.Link>
       

        <Nav.Link as={Link} to="/" className="donornavbar-itemlogout">Log Out</Nav.Link>
      </Nav>
      
    </nav>
  );
}

export default CampOrganizerNavbar;
