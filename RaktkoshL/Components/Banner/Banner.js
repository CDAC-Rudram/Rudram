import React from 'react';
import './Banner.css';

import Background from './Background.jpeg';


function Banner() {
  return (
    <section className="banner">
      <div className="banner-text">
      <h1>Blood is meant for circulation</h1>
      <h1 style={{ color: 'Red' }}>Donate Blood</h1>
        <p>We partner with hospitals, donor community, 
        and blood banks to spread awareness and timely 
        blood donation to save life and unite families.</p>
      </div>
      <div className="banner-images">
        
        <img src={Background} alt="Blood donation" />
        
      </div>
    </section>
  );
}

export default Banner;
