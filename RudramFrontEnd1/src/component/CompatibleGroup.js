import React from 'react';
import './CompatibleGroup.css';
import savelife from './images/savelife.jpg';


const CompatibleGroup = () => {
  return (
    <div className="compatible">
     <h4>After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</h4>
      <section className="hero">
        
        {/* <div className="hero-text">
          <h2>One Blood Donation can save up to Three Lives</h2>
          <p>After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</p>
          
        </div> */}
        <div className="hero-img">
        
        <img src={savelife} alt="Blood Bag" />
        </div>
        <div className="compatibility-table">
        
          <h3>Compatible Blood Type Donors</h3>
          <table>
            <thead>
              <tr>
                <th>Blood Type</th>
                <th>Donate Blood To</th>
                <th>Receive Blood From</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A+</td>
                <td>A+ AB+</td>
                <td>A+ A- O+ O-</td>
              </tr>
              <tr>
                <td>O+</td>
                <td>O+ A+ B+ AB+</td>
                <td>O+ O-</td>
              </tr>
              <tr>
                <td>B+</td>
                <td>B+ AB+</td>
                <td>B+ B- O+ O-</td>
              </tr>
              <tr>
                <td>A-</td>
                <td>A+ A- AB+ AB-</td>
                <td>A- O-</td>
              </tr>		
              <tr>
                <td>AB+</td>
                <td>AB+</td>
                <td>Everyone</td>
              </tr>
              <tr>
                <td>O-</td>
                <td>Everyone</td>
                <td>O-</td>
              </tr>		
              <tr>
                <td>B-</td>
                <td>B+ B- AB+ AB-</td>
                <td>B- O-</td>
              </tr>		
              <tr>
                <td>AB-</td>
                <td>AB+ AB-</td>
                <td>AB- A- B- O-</td>
              </tr>		
              {/* Add other blood types here */}
            </tbody>
          </table>
        </div>
      </section>
      
    </div>
  );
};

export default CompatibleGroup;


