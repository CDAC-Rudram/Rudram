import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './PatientNavbar.css';

function Navbar1() {
  return (
    <nav className="donornavbar">
      <div className="blooddonorheading">
        <h1>Patients/Relatives</h1>
      </div>
      <Nav className="donornavbar-links">
      <Nav.Link as={Link} to="/patientrelativeshome" className="donornavbar-item">Home</Nav.Link>
        
       
        
        <Nav.Link as={Link} to="/search-livedonor" className="donornavbar-item">Search Live Donor</Nav.Link>
        <Link to="/donornearby-blood-centers" className="donornavbar-item">Near By Blood Centers</Link>


        <Nav.Link as={Link} to="/" className="donornavbar-itemlogout">Log Out</Nav.Link>
      </Nav>
      
    </nav>
  );
}

export default Navbar1;
