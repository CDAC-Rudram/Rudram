import React from 'react';
import './FormInformationBC.css';

function BasicInformation({ formData, setFormData, errors }) {

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Calculate age if dob is changed
    if (name === 'dob') {
      const calculatedAge = calculateAge(value);
      setFormData({ ...formData, [name]: value, age: calculatedAge });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Function to calculate age from date of birth
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust if the birth date hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  return (
    <div className="centered-container">
      <div className="form-wrapper">
        <h2>Basic Information</h2>
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth *</label>
            <input
              type="date"
              id="dob"
              name="dob"
              placeholder="Date of Birth"
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && <span className="error">{errors.dob}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="age">Age *</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              readOnly
            />
            {errors.age && <span className="error">{errors.age}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender *</label>
            <select
              id="gender"
              name="gender"
              onChange={handleChange}
              value={formData.gender}
            >
              <option value="">Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <span className="error">{errors.gender}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="bloodGroup">Blood Group</label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              onChange={handleChange}
              value={formData.bloodGroup}
            >
              <option value="">Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            {errors.bloodGroup && <span className="error">{errors.bloodGroup}</span>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default BasicInformation;
