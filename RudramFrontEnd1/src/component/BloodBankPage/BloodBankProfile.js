import React, { useState } from 'react';
import './BloodBankProfile.css'; // Assume you create a CSS file for styling
import BloodBankNavbar from './BloodBankNavbar';
import { useNavigate } from 'react-router-dom';

const states = {
  "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
  "Karnataka": ["Bangalore", "Mysore", "Hubli"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
};

const BloodCenterProfile = () => {
  const [selectedState, setSelectedState] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [centerDetails, setCenterDetails] = useState({
    centerName: "",
    address: "",
    country: "India",
    contactNumber: "",
    pinCode: "",
  });

  const navigate = useNavigate();

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setDistricts(states[state] || []);
    setSelectedDistrict(""); // Reset district when state changes
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCenterDetails({
      ...centerDetails,
      [name]: value,
    });
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8383/api/blood-centers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...centerDetails,
          state: selectedState,
          city: selectedDistrict,
        }),
      });
      if (response.ok) {
        alert("Blood center registered successfully!");
        navigate("/camporganizerhome");
      } else {
        alert("Failed to register blood center.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while registering the blood center.");
    }
  };

  return (
    <div>
      <BloodBankNavbar />
      <div className="form-container">
        <h2>Blood Center Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Blood Center Name *</label>
            <input
              type="text"
              name="centerName"
              value={centerDetails.centerName}
              onChange={handleInputChange}
              placeholder="Enter Blood Center Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Address *</label>
            <input
              type="text"
              name="address"
              value={centerDetails.address}
              onChange={handleInputChange}
              placeholder="Enter Address"
              required
            />
          </div>
          <div className="form-group">
            <label>State *</label>
            <select value={selectedState} onChange={handleStateChange} required>
              <option value="">Select State</option>
              {Object.keys(states).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>City *</label>
            <select
              value={selectedDistrict}
              onChange={handleDistrictChange}
              disabled={!selectedState}
              required
            >
              <option value="">Select City</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Country *</label>
            <input
              type="text"
              name="country"
              value={centerDetails.country}
              onChange={handleInputChange}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Contact Number *</label>
            <input
              type="text"
              name="contactNumber"
              value={centerDetails.contactNumber}
              onChange={handleInputChange}
              placeholder="Enter Contact Number"
              required
            />
          </div>
          <div className="form-group">
            <label>Pin Code *</label>
            <input
              type="text"
              name="pinCode"
              value={centerDetails.pinCode}
              onChange={handleInputChange}
              placeholder="Enter Pin Code"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Register Blood Center
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BloodCenterProfile;
