import React from 'react';
import './Footer.css';
import logo from'./logo.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Raktam" />
        </div>
        <div className="footer-contact">
          <p>Email us: <a href="mailto:contact@raktam.com">contact@raktam.com</a></p>
          <p>For Blood request: <strong>24x7</strong></p>
        </div>
        
      </div>
      
      <div className="footer-copyright">
        <p>© Copyright 2024 Raktam Lifecare Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
