import React, { useState } from 'react';
import axios from 'axios';
import BasicInformation from './BasicInformation';
import ContactInformation from './ContactInformation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FormInformationBC.css';
import { Link } from 'react-router-dom';

function RegisterDonor() {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    age: '',
    gender: '',
    bloodGroup: '',
    email: '',
    mobileNumber: '',
    address: '',
    state: '',
    district: '',
    pinCode: '',
    isLiveDonor: false,
  });

  const [step, setStep] = useState(1); // Step state
  const [errors, setErrors] = useState({});

  const validatePersonalInfo = () => {
    let tempErrors = {};
    tempErrors.fullName = formData.fullName ? "" : "Full Name is required.";
    tempErrors.dob = formData.dob ? "" : "Date of Birth is required.";
    tempErrors.age = formData.age ? "" : "Age is required.";
    tempErrors.gender = formData.gender ? "" : "Gender is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleNext = () => {
    if (validatePersonalInfo()) {
      setStep(2); // Move to step 2 if validation passes
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validatePersonalInfo()) {
      try {
        const response = await axios.post('http://localhost:8282/api/form', formData);
        toast.success(response.data.message);
        setTimeout(() => {
          window.location.href = '/';
        }, 3000);
      } catch (error) {
        if (error.response) {
          if (error.response.status === 400) {
            const backendErrors = error.response.data;
            setErrors(backendErrors);
          } else if (error.response.status === 409) {
            toast.error(error.response.data.message);
            setTimeout(() => {
              window.location.href = '/';
            }, 3000);
          } else {
            toast.error(error.response?.data?.message || 'Failed to submit data');
          }
        } else {
          toast.error('Failed to submit data');
        }
      }
    }
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, isLiveDonor: e.target.checked });
  };

  return (
    <div className="App">
      <ToastContainer />
      <div className="form-container">
        {step === 1 && (
          <div className="form-section">
            <h2>Personal Information</h2>
            <BasicInformation formData={formData} setFormData={setFormData} errors={errors} />
            <button className="next-button" onClick={handleNext}>Next</button>
          </div>
        )}
        {step === 2 && (
          <div className="form-section">
            <h2>Contact Information</h2>
            <ContactInformation formData={formData} setFormData={setFormData} errors={errors} />
            <div className="form-group">
              <label className="livecheck">
                <input
                  type="checkbox"
                  name="isLiveDonor"
                  checked={formData.isLiveDonor}
                  onChange={handleCheckboxChange}
                />
                Register as a Live Donor
              </label>
            </div>
            {formData.isLiveDonor && (
              <div className="form-group">
                <Link to="/terms-conditions" className="terms-link">
                  Read Terms and Conditions
                </Link>
              </div>
            )}
            <button type="submit" onClick={handleSubmit}>Submit</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegisterDonor;
