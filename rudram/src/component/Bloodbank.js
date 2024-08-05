import React , { useState }from 'react';
import './Bloodbank.css';
import BloodBankLogin from './images/BloodBankLogin.jpg';
import { useNavigate } from 'react-router-dom';

const Bloodbank = () => {

    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleMobileNumberChange = (e) => {
        const value = e.target.value;
        // Allow only numbers
        if (/^\d*$/.test(value)) {
            setMobileNumber(value);
        }
    };

    const validateMobileNumber = () => {
        if (mobileNumber.length !== 10) {
            setError('Mobile number must be exactly 10 digits.');
            return false;
        }
        setError('');
        return true;
    };

    const validateMobileNumber9 = () => {
        const phoneRegex = /^[987]\d{9}$/;
        if (!phoneRegex.test(mobileNumber)) {
            setError('Invalid Mobile Number');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = () => {
        if (validateMobileNumber() && validateMobileNumber9()) {
             // Proceed to OTP page
             navigate('/otp', { state: { mobileNumber } });
        }
    };

    const handleReset = () => {
        setMobileNumber('');
        setError('');
    };

    return (
        <div className="login-container">
            <div className="login-header">
                Login
            </div>
            <div className="login-content">
                <img src={BloodBankLogin} alt="Blood Donation" className="login-image" />
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
                    {/* <p>
                        By signing up, you agree to our <a href="#">terms and conditions</a>.
                    </p> */}
                    <div className="login-buttons">
                    <button className="reset-button" onClick={handleReset}>Reset</button>
                    <button className="submit-button" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bloodbank;
