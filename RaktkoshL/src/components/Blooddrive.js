import React from 'react';

const Blooddrive = () => {
  return (
    <div className="drive">
      <section className="donation-drive">
        <h2>Upcoming blood donation drive</h2>
        <h1>Donate Blood, Save Lives</h1>
        <p>Once a donor, always a donor. You don’t have to be a doctor to save lives, but you can save lives by donating blood.</p>
      </section>
      <section className="availability">
        <h2>Our Availability Across India</h2>
        <p>We have a pan-India presence that started in Maharashtra. Here is our online reach across the state:</p>
        {/* Add more details as needed */}
      </section>
    </div>
  );
};

export default Blooddrive;
