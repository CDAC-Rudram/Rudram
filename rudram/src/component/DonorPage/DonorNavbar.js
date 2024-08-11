import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './DonorNavbar.css';






function Navbar1() {
  return (
    <nav className="navbar">
      <div className="blood-donor">
        <h1>Blood Donor </h1>
      </div>
      <Nav className="navbar-links">
      <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
        <Nav.Link as={Link} to="/profile" className="nav-item">Profile</Nav.Link>
        
        <Nav.Link as={Link} to="/my-rewards" className="nav-item">My Rewards</Nav.Link>
        <Nav.Link as={Link} to="/live-donor" className="nav-item">Regiter as Live Donor</Nav.Link>
        <Nav.Link as={Link} to="/coupon-history" className="nav-item">Coupon History</Nav.Link>
        
      </Nav>
      
    </nav>
  );
}

export default Navbar1;
