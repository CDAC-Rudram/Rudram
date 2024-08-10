import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const email = "user@example.com";  // Replace with actual email or get from auth context
    axios.get(`http://localhost:8080/api/user/${email}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the user data!", error);
      });
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <p><strong>Name:</strong> {user.fullName}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Date of Birth:</strong> {user.dob}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Phone Number:</strong> {user.mobileNumber}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p><strong>State:</strong> {user.state}</p>
      <p><strong>District:</strong> {user.district}</p>
      <p><strong>Pincode:</strong> {user.pinCode}</p>
    </div>
  );
};

export default Profile;
