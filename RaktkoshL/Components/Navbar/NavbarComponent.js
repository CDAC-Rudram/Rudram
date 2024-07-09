import React from 'react';
import './Navbar1.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">Blood Seva</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/education">Educational Corner</a></li>
          
          <li><button className="login-button">Login</button></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
