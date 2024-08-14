import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './DonorEducationalCorner.css';
import cardimg1 from './EducationalCornerImages/cardimg1.jpg';
import cardimg2 from './EducationalCornerImages/cardimg2.jpg';
import cardimg3 from './EducationalCornerImages/cardimg3.jpg';
import cardimg4 from './EducationalCornerImages/cardimg4.jpg';
import cardimg5 from './EducationalCornerImages/cardimg5.jpg';
import cardimg6 from './EducationalCornerImages/cardimg6.jpg';
import cardimg7 from './EducationalCornerImages/cardimg7.jpg';
import cardimg8 from './EducationalCornerImages/cardimg8.jpg';
import cardimg9 from './EducationalCornerImages/cardimg9.jpg';
import cardimg10 from './EducationalCornerImages/cardimg10.png';


function EducationalCorner() {
  return (
    <div className="donoreducational-corner">
      <h2>Educational Corner</h2>
      <Carousel
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        centerMode
        centerSlidePercentage={33.33}
      >
        <div className="donorcard">
          <a href="https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications/blood-product-standardization/quality-and-safety/donation-testing#:~:text=WHO%20recommends%20that%20all%20blood,B%20and%20C%20and%20syphilis." target="_blank" rel="noopener noreferrer">
            <img src={cardimg8} alt="Which Tests Were Performed On Your Blood." />
            <p>Which Tests Were Performed On Your Blood.</p>
          </a>
        </div>
        <div className="donorcard">
          <a href="https://www.redcrossblood.org/donate-blood/blood-donation-process/what-happens-to-donated-blood.html" target="_blank" rel="noopener noreferrer">
            <img src={cardimg1} alt="What Happens to Donated Blood" />
            <p>What Happens to Donated Blood.</p>
          </a>
        </div>
        <div className="donorcard">
          <a href="https://www.redcrossblood.org/donate-blood/how-to-donate/how-blood-donations-help.html" target="_blank" rel="noopener noreferrer">
            <img src={cardimg10} alt="How Blood Donations Help Patients" />
            <p>How Blood Donations Help Patients.</p>
          </a>
        </div>
        <div className="donorcard">
          <a href="https://www.medicinenet.com/how_do_i_increase_my_hemoglobin/article.htm" target="_blank" rel="noopener noreferrer">
            <img src={cardimg2} alt="How To Increase Hb in Blood." />
            <p>How To Increase Hb in Blood.</p>
          </a>
        </div>
        <div className="donorcard">
          <a href="https://pharmeasy.in/blog/benefits-of-donating-blood-a-deeper-look-into-life-saving-advantages/" target="_blank" rel="noopener noreferrer">
            <img src={cardimg3} alt="Benefits of Donating Blood: A Deeper Look into Life-Saving Advantages" />
            <p>Benefits of Donating Blood: A Deeper Look into Life-Saving Advantages</p>
          </a>
        </div>
        <div className="donorcard">
          <a href="https://www.ncbi.nlm.nih.gov/books/NBK310568/" target="_blank" rel="noopener noreferrer">
            <img src={cardimg4} alt="What should you do after donating blood?" />
            <p>What should you do after donating blood?</p>
          </a>
        </div>
        <div className="donorcard">
          <a href="https://www.redcrossblood.org/donate-blood/how-to-donate/common-concerns/first-time-donors.html" target="_blank" rel="noopener noreferrer">
            <img src={cardimg5} alt="How long does a blood donation take?" />
            <p>How long does a blood donation take?</p>
          </a>
        </div>
        <div className="donorcard">
          <a href="https://www.urmc.rochester.edu/encyclopedia/content.aspx?ContentTypeID=160&ContentID=36" target="_blank" rel="noopener noreferrer">
            <img src={cardimg6} alt="What are platelets and how are they used?" />
            <p>What are platelets and how are they used?</p>
          </a>
        </div>
        <div className="donorcard">
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10642529/" target="_blank" rel="noopener noreferrer">
            <img src={cardimg7} alt="Are the history questions necessary every time I donate?" />
            <p>Are the history questions necessary every time I donate?
            </p>
          </a>
        </div>
        <div className="donorcard">
          <a href="https://www.orfonline.org/expert-speak/addressing-the-blood-access-and-availability-crisis" target="_blank" rel="noopener noreferrer">
            <img src={cardimg9} alt="Why are there often blood shortages?" />
            <p>Why are there often blood shortages?</p>
          </a>
        </div>
      </Carousel>
    </div>
  );
}

export default EducationalCorner;
