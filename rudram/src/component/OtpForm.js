import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Donors.css';

const OtpForm = ({ mobileNumber, role, onReset }) => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false); // Add loading state
    const navigate = useNavigate();

    const handleOtpChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setOtp(value);
        }
    };

    const validateOtp = () => {
        if (otp.length !== 6) {
            setError('OTP must be exactly 6 digits.');
            return false;
        }
        setError('');
        return true;
    };

    const handleOtpSubmit = async () => {
        if (validateOtp()) {
            setLoading(true); // Start loading
            try {
                const response = await axios.post('http://localhost:8383/VerifyOtp', null, {
                    params: {
                        phoneNumber: mobileNumber,
                        userOtp: otp,
                        role: role, // Include role in the request
                    },
                });

                const roleBasedPath = {
                    'Patient/Relatives': '/patient',
                    'Donor': '/DonorHomePage',
                    'Camp Organizer': '/organizer',
                    'Blood Center': '/centre',
                    'Hospital': '/hospital',
                };

                console.log(response.data);
                if (response.data === `OTP validated successfully`) {
                    setSuccess(true);

                    // Redirect based on the user's role
                    const redirectPath = roleBasedPath[role];
                    if (redirectPath) {
                        navigate(redirectPath);
                    } else {
                        navigate('/'); // Default fallback path if role is not found
                    }
                } else {
                    setError('Invalid OTP or expired OTP.');
                }
            } catch (error) {
                setError('Failed to verify OTP. Please try again.');
            } finally {
                setLoading(false); // Stop loading
            }
        }
    };

    return (
        <div className="otp-form">
            <h2>Enter OTP</h2>
            <p>We've sent an OTP to your number: {mobileNumber}</p>
            <input
                type="text"
                placeholder="Enter OTP"
                className="login-input"
                value={otp}
                onChange={handleOtpChange}
                disabled={loading} // Disable input while loading
            />
            {error && <p className="error-message">{error}</p>}
            <div className="login-buttons">
                <button className="reset-button" onClick={onReset} disabled={loading}>
                    Reset
                </button>
                <button className="submit-button" onClick={handleOtpSubmit} disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit OTP'}
                </button>
            </div>
        </div>
    );
};

export default OtpForm;
