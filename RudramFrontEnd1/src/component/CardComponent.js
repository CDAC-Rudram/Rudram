// src/CardComponent.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Blooddonoricon from './icons/Blooddonoricon.png';
import Hospitalicon from './icons/Hospitalicon.png';
import Bloodcampicon from './icons/Bloodcampicon.png';
import Bloodcentericon from './icons/Bloodcentericon.jpg';


import './CardComponent.css';

const CardComponent = ({}) => {
  return (
    <section className="cardsroles">
      <div>
          <h2>Our Services</h2>
          <p>Our main aim is to Attract Blood Donors. Our main Stakeholders are Donors,Hospitals,Blood Centers,Blood Donation camp Organizers and Patients/Relatives.
            Patients/Relatives can get Live Donors.Donors can go to Donate Blood to Hospitals,Blood Centers also to the Blood Donation Camps.Hospitals and Blood Centers can
            get Blood Donors and can also search for Blood Donors in Emergency. </p>
      </div>
          <div className="venue-carousel">
          <section className="card-container">
        <div className="card">
            <div><img src={Blooddonoricon} alt="Card Image 1" className="image1"/></div>
            <div className="card-content">
                <h3>Blood Donor</h3>
                <p>Donors are backbone.Once they donate blood they will get access to Rewards.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
        
        <div className="card">
           <div> <img src={Hospitalicon} alt="Card Image 2" className="image2"/></div>
            <div className="card-content">
                <h3>Hospital</h3>
                <p>Hospitals recieves more blood donation and can get Live Donors when there is an Emergency.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
        <div className="card">
            <div><img src={Bloodcentericon} alt="Card Image 2" className="image3"/></div>
            <div className="card-content">
                <h3>Patient/Relatives</h3>
                <p>In case of emergency, patients or relatives can find Live blood donor faster.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
        <div className="card">
           <div> <img src={Bloodcampicon} alt="Card Image 2" className="image4"/></div>
            <div className="card-content">
                <h3>Camp Organizer</h3>
                <p>Camp Organizer gets more Blood Donors.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
       
    </section>
          </div>
        </section>
  );
};

export default CardComponent;
