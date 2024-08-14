import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function MyRewards() {
  return (
    <div>
      <h2>My Rewards</h2>
      <nav>
        <ul>
          <li><Link to="coupons">View Coupons</Link></li>
          <li><Link to="coupon-history">Coupon History</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default MyRewards;
