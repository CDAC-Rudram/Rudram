import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './images/logo.jpg'; // Adjust the path according to your project structure

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/user-selection'); // Navigate to UserSelection page
  };

  return (
    
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Raktkosh Logo" className="logo" />
        <Link to="/" className="logo-name"></Link>
      </div>
    
      <ul className="nul">
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/about-us" className="nav-item">About Us</Link></li>
        
        <li><Link to="/faq" className="nav-item">FAQ</Link></li>
        <li><Link to="/educational-corner" className="nav-item">Educational Corner</Link></li>
       
        <li><button onClick={handleLoginClick} className="login-button">Login</button></li>
      </ul>
     
    </div>
   
  );
};

export default Navbar;
