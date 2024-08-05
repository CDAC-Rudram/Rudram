import React , {useState }from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaHandHoldingWater, FaBullhorn, FaTint, FaHospital } from 'react-icons/fa';
import './UserSelection.css';

    const UserSelection = () => {
  
    const [selectedRole, setSelectedRole] = useState('');
    const navigate = useNavigate();

    const handleSelection = (role) => {
        setSelectedRole(role);
    };

    const handleSubmit = () => {
        if (selectedRole) {
            navigate(`/${selectedRole}`);
        }
    };

    return (
    <div className='App'>
    <div className="user-selection">
    <div
                    className={`role-option ${selectedRole === 'patient' ? 'selected' : ''}`}
                    onClick={() => handleSelection('patient')}
                >
      <button className="user-option" onClick={() => handleSelection('Patient/Relatives')}>
        <FaUser size={50} />
        <span>Patient/Relatives</span>
      </button>
      </div>
      <div
                    className={`role-option ${selectedRole === 'donor' ? 'selected' : ''}`}
                    onClick={() => handleSelection('donor')}
                >
      <button className="user-option" onClick={() => handleSelection('Donor')}>
        <FaHandHoldingWater size={50} />
        <span> Blood Donor</span>
      </button>
      </div>
        
      <div
                    className={`role-option ${selectedRole === 'organizer' ? 'selected' : ''}`}
                    onClick={() => handleSelection('organizer')}
                >
      <button className="user-option" onClick={() => handleSelection('Camp Organizer')}>
        <FaBullhorn size={50} />
        <span>Camp Organizer</span>
      </button>
      </div>
      <div
                    className={`role-option ${selectedRole === 'centre' ? 'selected' : ''}`}
                    onClick={() => handleSelection('centre')}
                >
      <button className="user-option" onClick={() => handleSelection('Blood Center')}>
        <FaTint size={50} />
        <span>Blood Centre</span>
      </button>
      </div>
      <div
                    className={`role-option ${selectedRole === 'hospital' ? 'selected' : ''}`}
                    onClick={() => handleSelection('hospital')}
                >
      <button className="user-option" onClick={() => handleSelection('Hospital ')}>
        <FaHospital size={50} />
        <span> Hospital </span>
      </button>
      </div>
    </div>
    <div className="actions">
                <button className="cancel-button" onClick={() => setSelectedRole('')}>
                    Cancel
                </button>
                <button className="submit-button" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
    </div>
  );
};

export default UserSelection;
