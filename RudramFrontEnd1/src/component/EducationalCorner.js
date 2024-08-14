import React from 'react';
import './EducationalCorner.css';
import Navbar from './Navbar';
import FooterComponent from './FooterComponent';

const EducationalCorner = () => {
  return (
    <div>
      <Navbar />
      <div className="educational-corner">
        <h1>Educational Corner</h1>
        
        <section>
          <h2><a href="https://www.mayoclinic.org/tests-procedures/blood-donation/about/pac-20385144" target="_blank" rel="noopener noreferrer">Introduction to Blood Donation</a></h2>
          <p>Explanation about what blood donation is, types of donations, and the donation process.</p>
        </section>
        
        <section>
          <h2><a href="https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-important-things-to-keep-in-mind-before-donating-blood" target="_blank" rel="noopener noreferrer">Why Donate Blood?</a></h2>
          <p>Information on the importance of donating blood, benefits for donors, and testimonials.</p>
        </section>
        
        <section>
          <h2><a href="https://www.hematology.org/education/patients/blood-basics#:~:text=It%20has%20four%20main%20components,to%20prevent%20excess%20blood%20loss" target="_blank" rel="noopener noreferrer">Understanding Blood</a></h2>
          <p>Details about blood composition, blood types, and the functions of blood.</p>
        </section>
        
        <section>
          <h2><a href="https://www.redcrossblood.org/donate-blood/blood-donation-process/before-during-after.html" target="_blank" rel="noopener noreferrer">Health and Wellness</a></h2>
          <p>Tips on diet, pre-donation preparation, and post-donation care.</p>
        </section>
        
        <section>
          <h2><a href="https://www.webmd.com/cancer/lymphoma/blood-disorder-types-and-treatment" target="_blank" rel="noopener noreferrer">Medical Information</a></h2>
          <p>Information on blood disorders, treatments, and latest research.</p>
        </section>
        
        <section>
          <h2><a href="https://www.redcrossblood.org/local-homepage/news/article/myths-about-donating-blood.html" target="_blank" rel="noopener noreferrer">Myths About Blood Donation</a></h2>
          <p>Common Myths about Blood Donation.</p>
        </section>
        
        <section>
          <h2><a href="https://www.bloodcenter.org/about/news/images/" target="_blank" rel="noopener noreferrer">Educational Resources</a></h2>
          <p>Infographics, videos, and downloadable guides about blood donation.</p>
        </section>
        
        <section>
          <h2><a href="https://www.redcrossblood.org/hosting-a-blood-drive/learn-about-hosting/how-hosting-a-blood-drive-works.html" target="_blank" rel="noopener noreferrer">Get Involved</a></h2>
          <p>Details on volunteer opportunities, organizing blood drives, and partnerships.</p>
        </section>
        
        <section>
          <h2><a href="https://www.idonate.org.in/?gad_source=1&gclid=Cj0KCQjwiOy1BhDCARIsADGvQnA7-M1d4iwLkEcGHbUDP_SuehW3OmzvPeAqHgvU9GyeyoBwzEaNVRAaAjK9EALw_wcB" target="_blank" rel="noopener noreferrer">Events and Campaigns</a></h2>
          <p>Information on upcoming events, campaigns, and past initiatives.</p>
        </section>
        

      </div>
      <FooterComponent />
    </div>
  );
};

export default EducationalCorner;
