import React, { useState } from 'react';
import './DonorFormInformationBC.css';

function ContactInformation({ formData, setFormData, errors }) {
  const states = ["Maharashtra", "Gujarat", "Rajasthan"]; // Add more states as needed
  const districtsByState = {
    Maharashtra: ["Nagpur", "Pune", "Mumbai"],
    Gujarat: ["Porbandar", "Ahmedabad", "Jamnagar"],
    Rajasthan: ["Jaipur", "Jodhpur", "Kota"],
  };

  const [districts, setDistricts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "state") {
      setDistricts(districtsByState[value] || []);
    }
  };

  return (
    <div className="donorcentered-container">
      <div className="donorform-wrapper">
        <h2>Contact Information</h2>
        <div className="donorform-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="donorform-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
        </div>
        <div className="donorform-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div className="donorform-group">
          <label htmlFor="state">State *</label>
          <select
            id="state"
            name="state"
            onChange={handleChange}
            value={formData.state}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.state && <span className="error">{errors.state}</span>}
        </div>
        <div className="donorform-group">
          <label htmlFor="district">District *</label>
          <select
            id="district"
            name="district"
            onChange={handleChange}
            value={formData.district}
          >
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
          {errors.district && <span className="error">{errors.district}</span>}
        </div>
        <div className="donorform-group">
          <label htmlFor="pinCode">Pin Code</label>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            placeholder="Pin Code"
            value={formData.pinCode}
            onChange={handleChange}
          />
          {errors.pinCode && <span className="error">{errors.pinCode}</span>}
        </div>
        <div className="donorform-group">
          <label htmlFor="lastDonationDate">Last Donation Date</label>
          <input
            type="date"
            id="lastDonationDate"
            name="lastDonationDate"
            value={formData.lastDonationDate}
            onChange={handleChange}
          />
          {errors.lastDonationDate && <span className="error">{errors.lastDonationDate}</span>}
        </div>
      </div>
    </div>
  );
}

export default ContactInformation;
