import React, { useState } from 'react';
import './CampOrganizerProfile.css';
import CampOrganizerNavbar from './CampOrganizerNavbar';
import { useNavigate } from 'react-router-dom';

const states = {
  "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
  "Karnataka": ["Bangalore", "Mysore", "Hubli"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
};

const CampOrganizerProfile = () => {
  const [selectedState, setSelectedState] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [campDetails, setCampDetails] = useState({
    campName: "",
    location: "",
    country: "India",
    phoneNumber: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setDistricts(states[state] || []);
    setSelectedDistrict(""); // Reset district when state changes
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCampDetails({
      ...campDetails,
      [name]: value,
    });
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8383/api/camps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...campDetails,
          state: selectedState,
          city: selectedDistrict,
        }),
      });
      if (response.ok) {
        alert("Blood camp registered successfully!");
        navigate("/camporganizerhome"); // Redirect to homepage after successful registration
      } else {
        alert("Failed to register blood camp.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while registering the blood camp.");
    }
  };

  return (
    <div>
      <CampOrganizerNavbar />
      <div className="form-container">
        <h2>Blood Camp Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Blood Camp Name *</label>
            <input
              type="text"
              name="campName"
              value={campDetails.campName}
              onChange={handleInputChange}
              placeholder="Enter Blood Camp Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Location of Blood Camp *</label>
            <input
              type="text"
              name="location"
              value={campDetails.location}
              onChange={handleInputChange}
              placeholder="Enter Location"
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
              value={campDetails.country}
              onChange={handleInputChange}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="text"
              name="phoneNumber"
              value={campDetails.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter Phone Number"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Register Blood Camp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampOrganizerProfile;
