import React, { useState } from 'react'; // Importing React and useState hook for state management
import BasicInfo from './BasicInfo'; // Importing the BasicInfo component
import ContactInfo from './ContactInfo'; // Importing the ContactInfo component
import EducationalCorner from './EducationalCorner'; // Importing the EducationalCorner component
import Profile from './Profile'; // Importing the Profile component
import './App.css'; // Importing the CSS file for styling

function App() {
  // `useState` hooks to manage the active tab and submission state
  const [activeTab, setActiveTab] = useState('basic'); // State to track the currently active tab
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track if the form is submitted

  // Function to handle form submission
  const handleSubmit = () => {
    setIsSubmitted(true); // Set submission state to true
  };

  // If the form is submitted, render the EducationalCorner component
  if (isSubmitted) {
    return (
      <div className="App">
        <EducationalCorner />
      </div>
    );
  }

  // Main UI structure for tabs and profile section
  return (
    <div className="App">
      <div className="tabs">
        {/* Button to switch to Basic Info tab */}
        <button
          className={activeTab === 'basic' ? 'active' : ''}
          onClick={() => setActiveTab('basic')}
        >
          Basic
        </button>
        {/* Button to switch to Contact Info tab */}
        <button
          className={activeTab === 'contact' ? 'active' : ''}
          onClick={() => setActiveTab('contact')}
        >
          Contact
        </button>
      </div>

      {/* Conditionally render BasicInfo or ContactInfo component based on active tab */}
      {activeTab === 'basic' && <BasicInfo onSubmit={handleSubmit} />}
      {activeTab === 'contact' && <ContactInfo onSubmit={handleSubmit} />}
      
      {/* Render Profile component */}
      <Profile />
    </div>
  );
}

export default App; // Exporting the App component for use in other parts of the application










    



