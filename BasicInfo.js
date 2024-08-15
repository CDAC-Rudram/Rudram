import React, { useState } from 'react'; // Importing React and useState hook for state management

// BasicInfo component to collect basic user information
function BasicInfo({ onSubmit }) {
  // `useState` hooks for managing form inputs
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [gender, setGender] = useState('');
  const [specialDay, setSpecialDay] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    onSubmit(); // Call the onSubmit function passed as a prop
  };

  // Render form for collecting basic information
  return (
    <div>
      <h2>Basic Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Input for Full Name */}
        <label>Full Name*:</label>
        <input 
          type="text" 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
          required 
        />

        {/* Input for Date of Birth */}
        <label>Date of Birth:</label>
        <input 
          type="date" 
          value={dob} 
          onChange={(e) => setDob(e.target.value)} 
        />

        {/* Input for Age */}
        <label>Age*:</label>
        <input 
          type="number" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
          required 
        />

        {/* Radio buttons for Marital Status */}
        <label>Marital Status:</label>
        <div>
          <label>
            <input 
              type="radio" 
              value="Single" 
              checked={maritalStatus === 'Single'} 
              onChange={(e) => setMaritalStatus(e.target.value)} 
            />
            Single
          </label>
          <label>
            <input 
              type="radio" 
              value="Married" 
              checked={maritalStatus === 'Married'} 
              onChange={(e) => setMaritalStatus(e.target.value)} 
            />
            Married
          </label>
        </div>

        {/* Dropdown for Gender */}
        <label>Gender:</label>
        <select 
          value={gender} 
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        {/* Input for Special Day to Donate Blood */}
        <label>Special Day to Donate Blood:</label>
        <input 
          type="date" 
          value={specialDay} 
          onChange={(e) => setSpecialDay(e.target.value)} 
        />

        {/* Dropdown for Blood Group */}
        <label>Blood Group:</label>
        <select 
          value={bloodGroup} 
          onChange={(e) => setBloodGroup(e.target.value)}
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BasicInfo; // Exporting the BasicInfo component


