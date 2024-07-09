import React from 'react';
import { FaUser, FaHandHoldingWater, FaBullhorn, FaTint, FaHospital } from 'react-icons/fa';
import './UserSelection.css';

const UserSelection = () => {
  const handleSelection = (userType) => {
    console.log(`Selected: ${userType}`);
    // Add your selection handling logic here
  };

  return (
    <div className='App'>
    <div className="user-selection">
        <div>
      <button className="user-option" onClick={() => handleSelection('Patient/Relatives')}>
        <FaUser size={50} />
        <span>Patient/ Relatives</span>
      </button>
      </div>
        <div>
      <button className="user-option" onClick={() => handleSelection('Donor')}>
        <FaHandHoldingWater size={50} />
        <span> Blood Donor</span>
      </button>
      </div>
        
      <div>
      <button className="user-option" onClick={() => handleSelection('Camp Organizer')}>
        <FaBullhorn size={50} />
        <span>Camp Organizer</span>
      </button>
      </div>
      <div>
      <button className="user-option" onClick={() => handleSelection('Blood Center')}>
        <FaTint size={50} />
        <span>Blood Centre</span>
      </button>
      </div>
        <div>
      <button className="user-option" onClick={() => handleSelection('Hospital ')}>
        <FaHospital size={50} />
        <span>                                                                                                 Hospital </span>
      </button>
      </div>
    </div>
    <div className="actions">
        <button className="cancel-button">Cancel</button>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default UserSelection;
