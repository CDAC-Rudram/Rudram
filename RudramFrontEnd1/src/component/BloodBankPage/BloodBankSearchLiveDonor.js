import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BloodBankSearchLiveDonor.css';
import BloodBankNavbar from './BloodBankNavbar';
import axios from 'axios'; // Import axios for API calls

const states = {
  "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
  "Karnataka": ["Bangalore", "Mysore", "Hubli"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
};

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const SearchLiveDonor = () => {
  const [selectedState, setSelectedState] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [donors, setDonors] = useState([]); // State to hold the list of donors

  const navigate = useNavigate();

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setSelectedState(selectedState);
    setDistricts(states[selectedState] || []);
    setSelectedDistrict(""); // Reset district when state changes
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const handleBloodGroupChange = (e) => {
    setSelectedBloodGroup(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:8383/api/live-donors/search', {
        params: {
          state: selectedState,
          city: selectedDistrict,
          bloodGroup: selectedBloodGroup,
        },
      });

      setDonors(response.data);
      
      // Pass the list of donors to the results page
      navigate('/livedonor-list', { state: { donors: response.data } });
    } catch (error) {
      console.error('Error fetching donors:', error);
    }
  };

  return (
    <div>
      <BloodBankNavbar />
      <div className="search-form-container">
        <h2>Search Live Donor</h2>
        <ul className="tabs">
          <li className="active">Search By Location</li>
        </ul>
        <div className="form-section">
          <div className="form-group">
            <label>Country</label>
            <input type="text" value="India" readOnly />
          </div>
          <div className="form-group">
            <label>State</label>
            <select value={selectedState} onChange={handleStateChange}>
              <option value="">Select State</option>
              {Object.keys(states).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>District</label>
            <select value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedState}>
              <option value="">Select District</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Blood Group</label>
            <select value={selectedBloodGroup} onChange={handleBloodGroupChange}>
              <option value="">Select Blood Group</option>
              {bloodGroups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>
          <div className="form-buttons">
            <button className="reset-button" onClick={() => window.location.reload()}>Reset</button>
            <button className="search-button" onClick={handleSearch}>Search Blood</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchLiveDonor;
