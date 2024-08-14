import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CouponList from './CouponList';
import DonorNavbar from './DonorNavbar';

const CheckMobileAndShowCoupons = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [canViewCoupons, setCanViewCoupons] = useState(null);
  const [lastDonationDate, setLastDonationDate] = useState(null);
  const navigate = useNavigate();

  const handleCheckMobileNumber = () => {
    fetch(`http://localhost:8383/api/check-mobile/${mobileNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setLastDonationDate(data.lastDonationDate); // Store last donation date
        if (data.canViewCoupons) {
          setCanViewCoupons(true);
        } else {
          setCanViewCoupons(false);
          alert('You cannot view coupons because you haven\'t donated.');
          navigate('/donorHomePage');  // Redirect to home page
        }
      })
      .catch((error) => console.error('Error checking mobile number:', error));
  };

  return (
    <div>
      <DonorNavbar />
      
      {canViewCoupons === null ? (
        <div>
          <label htmlFor="mobileNumber">Enter your mobile number:</label>
          <input
            type="text"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <button onClick={handleCheckMobileNumber}>Check</button>
        </div>
      ) : canViewCoupons ? (
        <div>
          
          <CouponList />
        </div>
      ) : (
        <p>You cannot view coupons because you haven't donated today.</p>
      )}
    </div>
  );
};

export default CheckMobileAndShowCoupons;
