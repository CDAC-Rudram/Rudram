import React, { useState, useEffect } from 'react';
import './CouponStyles.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Updated import
import DonorNavbar from './DonorNavbar';

const CouponList = () => {
  const [coupons, setCoupons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [couponsAdded, setCouponsAdded] = useState(0);
  const couponsPerPage = 5;
  const maxCouponsInBucket = 2;
  const navigate = useNavigate(); // Updated to use useNavigate

  useEffect(() => {
    fetch('http://localhost:8383/api/coupons')
      .then((response) => response.json())
      .then((data) => setCoupons(data))
      .catch((error) => console.error('Error fetching coupons:', error));
  }, []);

  const handleScratch = (id) => {
    if (couponsAdded >= maxCouponsInBucket) {
      alert('You can only add two coupons to the bucket.');
      navigate('/donorHomePage'); // Redirect the user to the home page after the warning
      return;
    }
  
    fetch(`http://localhost:8383/api/coupons/scratch/${id}`, {
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
  
        // Increment the count of coupons added to the bucket
        setCouponsAdded(couponsAdded + 1);
  
        // Show the coupon code as a pop-up
        alert(`Coupon Code: ${scratchedCoupon.code}`);
      })
      .catch((error) => console.error('Error scratching coupon:', error));
  };
  

  // Calculate the current coupons to display
  const indexOfLastCoupon = currentPage * couponsPerPage;
  const indexOfFirstCoupon = indexOfLastCoupon - couponsPerPage;
  const currentCoupons = coupons.slice(indexOfFirstCoupon, indexOfLastCoupon);

  // Handle page change
  const nextPage = () => {
    if (currentPage * couponsPerPage < coupons.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      
      <h2>My Rewards</h2>
      <ul>
        {currentCoupons.map((coupon) => (
          <li key={coupon.id}>
            <h3>{coupon.companyName}</h3>
            <p><strong>Offer:</strong> {coupon.offer}</p>
            <p><strong>Description:</strong> {coupon.description}</p>
            <p><strong>Valid Till:</strong> {coupon.validity}</p>
            {!coupon.scratched && (
              <button onClick={() => handleScratch(coupon.id)}>Add to Coupon Bucket</button>
            )}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={nextPage} disabled={indexOfLastCoupon >= coupons.length}>Next</button>
      </div>
    </div>
  );
};

export default CouponList;
