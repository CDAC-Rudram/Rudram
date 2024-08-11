import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Donors.css';
import OtpForm from './OtpForm';
import DonorLogin from './images/DonorLogin.jpg';

const Donor = () => {
    const [countryCode, setCountryCode] = useState('+91');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const location = useLocation();
    const role = location.state?.role || ''; // Extract role from location state

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        const numberWithoutCode = value.replace(countryCode, '');
        if (/^\d*$/.test(numberWithoutCode)) {
            setPhoneNumber(numberWithoutCode);
        }
    };

    const validatePhoneNumber = () => {
        const phoneRegex = /^[987]\d{9}$/;
        if (!phoneRegex.test(phoneNumber)) {
            setError('Invalid Mobile Number');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = async () => {
        if (validatePhoneNumber()) {
            try {
                const fullPhoneNumber = `${countryCode}${phoneNumber}`;
                const payload = {
                    phoneNumber: fullPhoneNumber,
                    role: role // Pass role to backend
                };

                console.log('Sending payload:', payload); // Log payload

                const response = await axios.post('http://localhost:8383/SendOtp', payload);

                console.log(response.data); // Log response data

                if (response.data === 'OTP sent successfully to user mobile number') {
                    setOtpSent(true);
                } else {
                    setError('Failed to send OTP. Please try again.');
                }
            } catch (error) {
                console.error('Error sending OTP:', error); // Log error
                setError('Failed to send OTP. Please try again.');
            }
        }
    };

    const handleReset = () => {
        setPhoneNumber('');
        setError('');
        setOtpSent(false);
    };

    const handleCountryCodeChange = (e) => {
        setCountryCode(e.target.value);
        setPhoneNumber('');
    };

    return (
        <div className="login-container">
            <div className="login-header">Login</div>
            <div className="login-content">
                <img src={DonorLogin} alt="Blood Donation" className="login-image" />
                {!otpSent ? (
                    <div className="login-form">
                        <h2>Welcome to Rudram</h2>
                        <p>We will send you a confirmation code to your registered mobile number.</p>
                        <div className="phone-input-container">
                            <select 
                                className="country-code-dropdown"
                                value={countryCode}
                                onChange={handleCountryCodeChange}
                            >
                                <option value="+91">+91 India</option>
                                <option value="+1">+1 USA</option>
                                <option value="+44">+44 UK</option>
                                {/* Add more country codes as needed */}
                            </select>
                            <input
                                type="text"
                                className="login-input"
                                placeholder="Mobile Number"
                                value={`${countryCode}${phoneNumber}`}
                                onChange={handlePhoneNumberChange}
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <div className="login-buttons">
                            <button className="reset-button" onClick={handleReset}>Reset</button>
                            <button className="submit-button" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                ) : (
                    <OtpForm 
                        mobileNumber={`${countryCode}${phoneNumber}`} 
                        onReset={handleReset} 
                        role={role} // Pass role to OtpForm
                    />
                )}
            </div>
        </div>
    );
};

export default Donor;
