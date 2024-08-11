import React, { useState, useEffect } from 'react';
import './CouponStyles.css'; // Import the CSS file

const CouponList = () => {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8282/api/coupons')
      .then((response) => response.json())
      .then((data) => setCoupons(data))
      .catch((error) => console.error('Error fetching coupons:', error));
  }, []);

  const handleScratch = (id) => {
    fetch(`http://localhost:8282/api/coupons/scratch/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to scratch coupon');
        }
        return response.json();
      })
      .then((scratchedCoupon) => {
        // Remove the scratched coupon from the coupon list
        const updatedCoupons = coupons.filter((coupon) => coupon.id !== id);
        setCoupons(updatedCoupons);

        // Show the coupon code as a pop-up
        alert(`Coupon Code: ${scratchedCoupon.code}`);
      })
      .catch((error) => console.error('Error scratching coupon:', error));
  };

  return (
    <div>
      <h2>My Rewards</h2>
      <ul>
        {coupons.map((coupon) => (
          <li key={coupon.id}>
            <h3>{coupon.companyName}</h3>
            <p><strong>Offer:</strong> {coupon.offer}</p>
            <p><strong>Description:</strong> {coupon.description}</p>
            <p><strong>Valid Till:</strong> {coupon.validity}</p>
            {!coupon.scratched && (
              <button onClick={() => handleScratch(coupon.id)}>Scratch to Reveal</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CouponList;
