import React, { useState } from 'react';
import './Donors.css';
import DonorLogin from './images/DonorLogin.jpg';
import OTPForm from './OTPForm';
import axios from 'axios';

const PhoneNumberForm = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const handleMobileNumberChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setMobileNumber(value);
        }
    };

    const validateMobileNumber = () => {
        const phoneRegex = /^[987]\d{9}$/;
        if (!phoneRegex.test(mobileNumber)) {
            setError('Invalid Mobile Number');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = async () => {
        if (validateMobileNumber()) {
            try {
                await axios.post('http://localhost:8282/SendOtp', { phoneNumber: mobileNumber });
                setOtpSent(true);
            } catch (error) {
                setError('Failed to send OTP. Please try again.');
            }
        }
    };

    const handleReset = () => {
        setMobileNumber('');
        setError('');
        setOtpSent(false);
    };

    return (
        <div className="login-container">
            <div className="login-header">
                Login
            </div>
            <div className="login-content">
                <img src={DonorLogin} alt="Blood Donation" className="login-image" />
                {!otpSent ? (
                    <div className="login-form">
                        <h2>Welcome to the Rudram</h2>
                        <p>We will send you the confirmation code to your registered mobile number.</p>
                        <input
                            type="text"
                            placeholder="Mobile Number"
                            className="login-input"
                            value={mobileNumber}
                            onChange={handleMobileNumberChange}
                        />
                        {error && <p className="error-message">{error}</p>}
                        <div className="login-buttons">
                            <button className="reset-button" onClick={handleReset}>Reset</button>
                            <button className="submit-button" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                ) : (
                    <OTPForm mobileNumber={mobileNumber} onReset={handleReset} />
                )}
            </div>
        </div>
    );
};

export default PhoneNumberForm;
