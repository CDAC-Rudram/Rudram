import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CouponDetail() {
  const { id } = useParams();
  const [coupon, setCoupon] = useState(null);

  useEffect(() => {
    fetch(`/api/coupons/${id}`)
      .then(response => response.json())
      .then(data => setCoupon(data));
  }, [id]);

  if (!coupon) return <div>Loading...</div>;

  return (
    <div>
      <h2>{coupon.name}</h2>
      <p><strong>Description:</strong> {coupon.description}</p>
      <p><strong>Validity:</strong> {coupon.validity}</p>
      <p><strong>Offer:</strong> {coupon.offer}</p>
    </div>
  );
}

export default CouponDetail;
