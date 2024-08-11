import React, { useState } from 'react';
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
            console.log('Navigating with role:', selectedRole); // Log role
            navigate('/donor', { state: { role: selectedRole } }); // Pass the role to the /donor route
        }
    };

    return (
        <div className='App'>
            <div className="user-selection">
                <div
                    className={`role-option ${selectedRole === 'Patient/Relatives' ? 'selected' : ''}`}
                    onClick={() => handleSelection('Patient/Relatives')}
                >
                    <button className="user-option">
                        <FaUser size={50} />
                        <span>Patient/Relatives</span>
                    </button>
                </div>
                <div
                    className={`role-option ${selectedRole === 'Donor' ? 'selected' : ''}`}
                    onClick={() => handleSelection('Donor')}
                >
                    <button className="user-option">
                        <FaHandHoldingWater size={50} />
                        <span>Blood Donor</span>
                    </button>
                </div>
                <div
                    className={`role-option ${selectedRole === 'Camp Organizer' ? 'selected' : ''}`}
                    onClick={() => handleSelection('Camp Organizer')}
                >
                    <button className="user-option">
                        <FaBullhorn size={50} />
                        <span>Camp Organizer</span>
                    </button>
                </div>
                <div
                    className={`role-option ${selectedRole === 'Blood Center' ? 'selected' : ''}`}
                    onClick={() => handleSelection('Blood Center')}
                >
                    <button className="user-option">
                        <FaTint size={50} />
                        <span>Blood Centre</span>
                    </button>
                </div>
                <div
                    className={`role-option ${selectedRole === 'Hospital' ? 'selected' : ''}`}
                    onClick={() => handleSelection('Hospital')}
                >
                    <button className="user-option">
                        <FaHospital size={50} />
                        <span>Hospital</span>
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
