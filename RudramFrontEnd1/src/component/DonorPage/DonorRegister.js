import React, { useState } from 'react';
import axios from 'axios';
import DonorBasicInformation from './DonorBasicInformation';
import DonorContactInformation from './DonorContactInformation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './DonorFormInformationBC.css';
import DonorNavbar from './DonorNavbar';

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
    lastDonationDate: '',
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
      const age = parseInt(formData.age, 10);
      if (age < 18 || age > 65) {
        toast.error('You cannot donate blood due to your age.');
        setTimeout(() => {
          window.location.href = '/homePage'; // Redirect to home page
        }, 3000);
        return;
      }

      try {
        const response = await axios.post('http://localhost:8383/api/form', formData);
        toast.success(response.data.message);
        setTimeout(() => {
          window.location.href = '/donorHomePage';
        }, 3000);
      } catch (error) {
        if (error.response) {
          if (error.response.status === 400) {
            const backendErrors = error.response.data;
            setErrors(backendErrors);
          } else if (error.response.status === 409) {
            toast.error(error.response.data.message);
            setTimeout(() => {
              window.location.href = '/donorHomePage';
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
    <div>
      <DonorNavbar />
      <div className="donorApp">
        <ToastContainer />
        <div className="donorform-container">
          {step === 1 && (
            <div className="donorform-section">
              <h2>Personal Information</h2>
              <DonorBasicInformation formData={formData} setFormData={setFormData} errors={errors} />
              <button className="donornext-button" onClick={handleNext}>Next</button>
            </div>
          )}
          {step === 2 && (
            <div className="donorform-section">
              <h2>Contact Information</h2>
              <DonorContactInformation formData={formData} setFormData={setFormData} errors={errors} />
              <div className="donorform-group">
                <label className="donorlivecheck">
                  <input
                    type="checkbox"
                    name="isLiveDonor"
                    checked={formData.isLiveDonor}
                    onChange={handleCheckboxChange}
                  />
                  Register as a Live Donor
                  <span className="tooltip">when you register as live donor a needy person can contact you sooner.You can save a life.as your contact number will be hsred with them.</span>
                </label>
              </div>
              <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegisterDonor;
