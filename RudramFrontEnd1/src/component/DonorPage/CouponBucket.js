import React, { useState, useEffect } from 'react';
import './CouponStyles.css'; // Import the CSS file
import DonorNavbar from './DonorNavbar';

const CouponBucket = () => {
  const [couponHistory, setCouponHistory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8383/api/couponHistory')
      .then((response) => response.json())
      .then((data) => setCouponHistory(data))
      .catch((error) => console.error('Error fetching coupon history:', error));
  }, []);

  return (
    <div>
      <DonorNavbar />
      <h2>Scratched Coupons</h2>
      <ul>
        {couponHistory.map((coupon) => (
          <li key={coupon.id}>
            <h3>{coupon.companyName}</h3>
            <p><strong>Offer:</strong> {coupon.offer}</p>
            <p><strong>Description:</strong> {coupon.description}</p>
            <p><strong>Valid Till:</strong> {coupon.validity}</p>
            <p><strong>Coupon Code:</strong> {coupon.code}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CouponBucket;
