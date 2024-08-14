import React, { useState } from 'react';
import axios from 'axios'; // Assuming you're using axios to make HTTP requests
import './DonorNearbyBloodCenter.css';
import DonorNavbar from './DonorNavbar';


const NearbyBloodHospitals = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);
  const [bloodHospitals, setBloodHospitals] = useState([]);

  const data = {
    states: [
      {
        id: 1,
        name: "Maharashtra",
        cities: [
          { id: 101, name: "Mumbai" },
          { id: 102, name: "Pune" },
          { id: 103, name: "Nagpur" },
          { id: 104, name: "Nashik" },
          { id: 105, name: "Thane" },
        ],
      },
      {
        id: 2,
        name: "Karnataka",
        cities: [
          { id: 201, name: "Bangalore" },
          { id: 202, name: "Mysore" },
          { id: 203, name: "Mangalore" },
          { id: 204, name: "Hubli" },
          { id: 205, name: "Belgaum" },
        ],
      },
      {
        id: 3,
        name: "Tamil Nadu",
        cities: [
          { id: 301, name: "Chennai" },
          { id: 302, name: "Coimbatore" },
          { id: 303, name: "Madurai" },
          { id: 304, name: "Tiruchirappalli" },
          { id: 305, name: "Salem" },
        ],
      },
      {
        id: 4,
        name: "Uttar Pradesh",
        cities: [
          { id: 401, name: "Lucknow" },
          { id: 402, name: "Kanpur" },
          { id: 403, name: "Varanasi" },
          { id: 404, name: "Agra" },
          { id: 405, name: "Meerut" },
        ],
      },
      {
        id: 5,
        name: "Gujarat",
        cities: [
          { id: 501, name: "Ahmedabad" },
          { id: 502, name: "Surat" },
          { id: 503, name: "Vadodara" },
          { id: 504, name: "Rajkot" },
          { id: 505, name: "Bhavnagar" },
        ],
      },
      {
        id: 6,
        name: "West Bengal",
        cities: [
          { id: 601, name: "Kolkata" },
          { id: 602, name: "Howrah" },
          { id: 603, name: "Durgapur" },
          { id: 604, name: "Asansol" },
          { id: 605, name: "Siliguri" },
        ],
      },
      {
        id: 7,
        name: "Rajasthan",
        cities: [
          { id: 701, name: "Jaipur" },
          { id: 702, name: "Udaipur" },
          { id: 703, name: "Jodhpur" },
          { id: 704, name: "Kota" },
          { id: 705, name: "Ajmer" },
        ],
      },
      {
        id: 8,
        name: "Bihar",
        cities: [
          { id: 801, name: "Patna" },
          { id: 802, name: "Gaya" },
          { id: 803, name: "Bhagalpur" },
          { id: 804, name: "Muzaffarpur" },
          { id: 805, name: "Purnia" },
        ],
      },
      {
        id: 9,
        name: "Madhya Pradesh",
        cities: [
          { id: 901, name: "Bhopal" },
          { id: 902, name: "Indore" },
          { id: 903, name: "Gwalior" },
          { id: 904, name: "Jabalpur" },
          { id: 905, name: "Ujjain" },
        ],
      },
      {
        id: 10,
        name: "Andhra Pradesh",
        cities: [
          { id: 1001, name: "Visakhapatnam" },
          { id: 1002, name: "Vijayawada" },
          { id: 1003, name: "Guntur" },
          { id: 1004, name: "Nellore" },
          { id: 1005, name: "Kurnool" },
        ],
      },
    ],
  };
  

  const handleStateChange = (e) => {
    const stateId = e.target.value;
    setSelectedState(stateId);
    const selectedState = data.states.find(state => state.id === parseInt(stateId));
    setCities(selectedState ? selectedState.cities : []);
    setSelectedCity('');
    setBloodHospitals([]);
  };

  const handleCityChange = (e) => {
    const cityId = e.target.value;
    setSelectedCity(cityId);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (selectedCity) {
      fetchBloodHospitals(selectedCity);
    }
  };

  const fetchBloodHospitals = async (cityId) => {
    try {
      const response = await axios.get(`http://localhost:8383/api/nearby-hospitals`, {
        params: {
          stateId: selectedState,
          cityId: cityId
        }
      });
      setBloodHospitals(response.data);
    } catch (error) {
      console.error('Error fetching blood hospitals:', error);
      
    }
  };

  return (
    <div>
        <DonorNavbar />
    <div className="nearby-blood-centers-container">
      <h1>Find Nearby Hospitals For Blood Donation</h1>
      <form className="location-form" onSubmit={handleSearch}>
        <label htmlFor="country">Country:</label>
        <input type="text" id="country" name="country" value="India" readOnly /><br /><br />

        <label htmlFor="state">State:</label>
        <select id="state" name="state" value={selectedState} onChange={handleStateChange} required>
          <option value="">Select State</option>
          {data.states.map(state => (
            <option key={state.id} value={state.id}>{state.name}</option>
          ))}
        </select><br /><br />

        <label htmlFor="city">City:</label>
        <select id="city" name="city" value={selectedCity} onChange={handleCityChange} required>
          <option value="">Select City</option>
          {cities.map(city => (
            <option key={city.id} value={city.id}>{city.name}</option>
          ))}
        </select><br /><br />

        <button type="submit">Search</button>
      </form>

      {bloodHospitals.length > 0 && (
        <div className="blood-centers-list">
          <h2>Near By Hospitals for Blood Donation</h2>
          <ul>
            {bloodHospitals.map(hospital => (
              <li key={hospital.id}><h6>Hospital Name={hospital.name}</h6> <h6>Hospital Address={hospital.address}</h6>
              
              </li>  
              
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default NearbyBloodHospitals;
