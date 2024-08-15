import React, { useState } from 'react'; // Importing React and useState hook for state management

// ContactInfo component to collect user contact information
function ContactInfo({ onSubmit }) {
  // `useState` hooks for managing form inputs
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [pinCode, setPinCode] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    onSubmit(); // Call the onSubmit function passed as a prop
  };

  // Render form for collecting contact information
  return (
    <div>
      <h2>Contact Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Input for Email */}
        <label>Email*:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        {/* Input for Mobile Number */}
        <label>Mobile Number*:</label>
        <input 
          type="text" 
          value={mobile} 
          onChange={(e) => setMobile(e.target.value)} 
          required 
        />

        {/* Input for Address */}
        <label>Address*:</label>
        <input 
          type="text" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          required 
        />

        {/* Input for State */}
        <label>State:</label>
        <input 
          type="text" 
          value={state} 
          onChange={(e) => setState(e.target.value)} 
        />

        {/* Input for District */}
        <label>District:</label>
        <input 
          type="text" 
          value={district} 
          onChange={(e) => setDistrict(e.target.value)} 
        />

        {/* Input for Pin Code */}
        <label>Pin Code:</label>
        <input 
          type="text" 
          value={pinCode} 
          onChange={(e) => setPinCode(e.target.value)} 
        />

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactInfo; // Exporting the ContactInfo component
