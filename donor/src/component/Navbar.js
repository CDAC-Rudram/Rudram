import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './Navbar.css';






function Navbar1() {
  return (
    <nav className="navbar">
      <div className="blood-donor">
        <h1>Blood Donor </h1>
      </div>
      <Nav className="navbar-links">
      <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
        <Nav.Link as={Link} to="/register" className="nav-item">Register</Nav.Link>
        
        <Nav.Link as={Link} to="/my-coupons" className="nav-item">My Coupons</Nav.Link>
        <Nav.Link as={Link} to="/live-donor" className="nav-item">Regiter as Live Donor</Nav.Link>
        <Nav.Link as={Link} to="/profile" className="nav-item">Profile</Nav.Link>
      </Nav>
      
    </nav>
  );
}

export default Navbar1;
