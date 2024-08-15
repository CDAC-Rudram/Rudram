import React from 'react'; // Importing React for creating the component
import './App.css'; // Importing the CSS file for styling

// EducationalCorner component displaying different options related to blood donation
function EducationalCorner() {
  return (
    <div>
      {/* Section with main options */}
      <div className="educational-corner">
        <div className="organize-camp">Organize Camp</div> {/* Option to organize a blood donation camp */}
        <div className="camp-history">Camp History</div> {/* Option to view camp history */}
        <div className="available-donors">Request Blood</div> {/* Option to view available donors */}
        <div className="donor-profile">Camp Organizer Profile</div> {/* Option to view donor profiles */}
      </div>

      {/* Information section for additional educational details */}
      <div className="educational-corner-info">
        <div>Responsibilites of Organizer  
          <p>  An organizer of a blood donation camp is responsible for planning and coordinating the event by collaborating with local hospitals, blood banks, and volunteers to ensure its success. They must ensure the venue is well-prepared, with all necessary equipment, seating, and hygiene facilities in place. Promotion and outreach are critical, as organizers must effectively advertise the event to attract donors. Additionally, organizers oversee the screening and registration of donors, ensuring eligibility and compliance with health regulations.</p></div> {/* Section for blood donation facts */}
        <div>Eligibility Criteria</div> {/* Section for eligibility criteria */}
        <div>Why Donate Blood?</div> {/* Section explaining why one should donate blood */}
        <div>FAQs</div> {/* Section for frequently asked questions */}
      </div>
    </div>
  );
}

export default EducationalCorner; // Exporting the EducationalCorner component
