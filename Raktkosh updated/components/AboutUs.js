import React from 'react';
import styled from 'styled-components';
import Blooddonor from './images/Blooddonor.jpeg';

const AboutSection = styled.section`
  padding: 40px;
  max-width: 800px;
  margin: auto;
  text-align: center;
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
`;

const AboutUs = () => {
  return (
    <AboutSection>
      <h1>About Us</h1>
      <p>
        The main purpose is to get more Blood Donation. To attract more donors we are providing some rewards to the donors. Hospitals,Blood Camp,Blood Centers
        are receiving more blood donors. Hospitals and Blood Center are getting access to live donors in cases of Emergencies.
        Donors are getting coupons of there choice after donating blood.  
      </p>
      <AboutImage src={Blooddonor} alt="Blood donation" />
      <p>
        
      </p>
    </AboutSection>
  );
};

export default AboutUs;
