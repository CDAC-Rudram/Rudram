import React, { useState } from 'react'; // Importing React and useState hook for state management

// Profile component for displaying and managing user profile options
function Profile() {
  const [profileOptions, setProfileOptions] = useState(null); // State to manage selected profile option

  // Render profile options
  return (
    <div className="profile-section">
      <h2>Profile</h2>
      <div className="profile-options">
        <button onClick={() => setProfileOptions('viewProfile')}>View Profile</button> {/* Button to view profile */}
        <button onClick={() => setProfileOptions('editProfile')}>Edit Profile</button> {/* Button to edit profile */}
        <button onClick={() => setProfileOptions('changePassword')}>Change Password</button> {/* Button to change password */}
      </div>

      {/* Conditionally render based on the selected profile option */}
      {profileOptions && <div>{`Selected Option: ${profileOptions}`}</div>}
    </div>
  );
}

export default Profile; // Exporting the Profile component
