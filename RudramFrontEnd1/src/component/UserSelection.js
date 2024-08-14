import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaHandHoldingWater, FaBullhorn, FaTint, FaHospital } from 'react-icons/fa';
import './UserSelection.css';
import Navbar from './Navbar';

const UserSelection = () => {
    const [selectedRole, setSelectedRole] = useState('');
    const navigate = useNavigate();

    const handleSelection = (role) => {
        setSelectedRole(role);
    };

    const handleSubmit = () => {
        if (selectedRole) {
            console.log('Navigating with role:', selectedRole); // Log role
            
            // Determine the target route based on the selected role
            let targetRoute;

            switch (selectedRole) {
                case 'Patient/Relatives':
                    targetRoute = '/patient'; // Define the route for Patient/Relatives
                    break;
                case 'Donor':
                    targetRoute = '/donor'; // Define the route for Donor
                    break;
                case 'Camp Organizer': // Changed from 'Camporganizer' to 'Camp Organizer'
                    targetRoute = '/organizer'; // Updated route for Camp Organizer
                    break;
                case 'Blood Center': // Changed from 'BloodCenter' to 'Blood Center'
                    targetRoute = '/centre'; // Define the route for Blood Center
                    break;
                case 'Hospital':
                    targetRoute = '/hospital'; // Define the route for Hospital
                    break;
                default:
                    console.log('/UserSelection');
                    return; // Exit the function if the role is unknown
            }

            // Navigate to the determined route and pass the role as state
            navigate(targetRoute, { state: { role: selectedRole } });
        }
    };

    return (
        <div>
            <Navbar />
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
                    className={`role-option ${selectedRole === 'Camp Organizer' ? 'selected' : ''}`} // Changed from 'Camporganizer' to 'Camp Organizer'
                    onClick={() => handleSelection('Camp Organizer')} // Changed from 'Camporganizer' to 'Camp Organizer'
                >
                    <button className="user-option">
                        <FaBullhorn size={50} />
                        <span>Camp Organizer</span>
                    </button>
                </div>
                <div
                    className={`role-option ${selectedRole === 'Blood Center' ? 'selected' : ''}`} // Changed from 'BloodCenter' to 'Blood Center'
                    onClick={() => handleSelection('Blood Center')} // Changed from 'BloodCenter' to 'Blood Center'
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
                <button className="uscancel-button" onClick={() => setSelectedRole('')}>
                    Cancel
                </button>
                <button className="ussubmit-button" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
        </div>
    );
};

export default UserSelection;
