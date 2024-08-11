// src/FooterComponent.js

import React from 'react';
import './FooterComponent.css';


const FooterComponent = () => {
    return (
        <footer className="footer">
            
            <div className="footer-bottom">
                <div className="footer-sitemap">
                    <p>Sitemap</p>
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Educational Corner</a>
                    <a href="#">FAQ</a>
                </div>
                <div className="footer-legal">
                    <p>Legal</p>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="footer-sitemap">
                    <p>Our Services</p>
                    <a href="#">Blood Donor</a>
                    <a href="#">Blood Camp</a>
                    <a href="#">Hospital</a>
                    <a href="#">Blood Bank</a>
                    <a href="#">Patients/Relatives</a>
                </div>
                
                
            </div>
            <div className="footer-copyright">
                <p>© Copyright 2024 Rudram All rights reserved.</p>
            </div>
        </footer>
    );
};

export default FooterComponent;
