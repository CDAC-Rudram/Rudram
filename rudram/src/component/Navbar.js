import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './images/logo.jpg'; // Adjust the path according to your project structure

const Navbar1 = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/user-selection'); // Navigate to UserSelection page
  };

  return (
    
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Rudram Logo" className="logo" />
        <h3 className="pname">Rudram</h3>
        <Link to="/" className="logo-name"></Link>
      </div>
    
      <Nav className="nul">
        <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
        <Nav.Link as={Link} to="/about-us" className="nav-item">About Us</Nav.Link>
        
        <Nav.Link as={Link} to="/faq" className="nav-item">FAQ</Nav.Link>
        <Nav.Link as={Link} to="/educational-corner" className="nav-item">Educational Corner</Nav.Link>
       
        <li><button onClick={handleLoginClick} className="login-button">Login</button></li> 
      </Nav>
     
    </div>
   
  );
};

export default Navbar1;
