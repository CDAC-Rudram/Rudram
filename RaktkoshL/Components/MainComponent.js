import React from 'react';
import './MainComponent.css';
import Bloodcamp from './images/Bloodcamp.jpg';
import Hospital1 from './images/Hospital1.png';


const MainComponent = () => {
  const h1Style = {
    color: 'red',
    
  };
  return (
    <section className="home-section">
      <h1 style={h1Style}> Blood is meant for circulation. Donate Blood.</h1>
      <h2>Once a blood donor, always a lifesaver.</h2>
      <p>The importance of regular blood donations cannot be overstated. Blood donations are a critical component of healthcare, saving countless lives each year.</p>
      <div className="mainComimages">
      <img className="image1" src={Bloodcamp} alt="Doctor and app" />
      
        <img src={Hospital1} alt="Blood donation"  className="image2"/>
        
      </div>
    </section>
  );
};

export default MainComponent;
