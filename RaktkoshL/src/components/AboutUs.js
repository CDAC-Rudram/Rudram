import React from 'react';
import styled from 'styled-components';

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
        At Raktam, we are a passionate and dedicated team driven by a singular purpose - to save lives and serve humanity through a humble initiative for a noble cause...
      </p>
      <AboutImage src="about-us-image.jpg" alt="Blood donation" />
      <p>
        By 2030, we aim to reduce the mortality rate due to blood shortages by 50% on a global scale, ensuring that every patient receives timely and safe blood transfusions...
      </p>
    </AboutSection>
  );
};

export default AboutUs;
