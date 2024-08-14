import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './DonorNavbar.css';

function Navbar1() {
  return (
    <nav className="donornavbar">
      <div className="blooddonorheading">
        <h1>Blood Donor </h1>
      </div>
      <Nav className="donornavbar-links">
      <Nav.Link as={Link} to="/donorHomePage" className="donornavbar-item">Home</Nav.Link>
        
        <Nav.Link as={Link} to="/donorregister" className="donornavbar-item">Register</Nav.Link>
        <Nav.Link as={Link} to="/my-rewards" className="donornavbar-item">My Rewards</Nav.Link>
        
        <Nav.Link as={Link} to="/coupon-bucket" className="donornavbar-item">Coupon Bucket</Nav.Link>

        <Nav.Link as={Link} to="/" className="donornavbar-itemlogout">Log Out</Nav.Link>
      </Nav>
      
    </nav>
  );
}

export default Navbar1;
