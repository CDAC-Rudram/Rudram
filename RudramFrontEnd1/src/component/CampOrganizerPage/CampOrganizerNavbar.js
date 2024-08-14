import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './CampOrganizerNavbar.css';

function CampOrganizerNavbar() {
  return (
    <nav className="donornavbar">
      <div className="blooddonorheading">
        <h1>Camp Organizer</h1>
      </div>
      <Nav className="donornavbar-links">
      <Nav.Link as={Link} to="/camporganizerhome" className="donornavbar-item">Home</Nav.Link>
        
      
      <Nav.Link as={Link} to="/camporganizerprofile" className="donornavbar-item">Profile</Nav.Link>
       

        <Nav.Link as={Link} to="/" className="donornavbar-itemlogout">Log Out</Nav.Link>
      </Nav>
      
    </nav>
  );
}

export default CampOrganizerNavbar;
