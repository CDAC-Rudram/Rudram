// FAQ.jsx
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQ.css';
import Navbar from './Navbar';
import FooterComponent from './FooterComponent';

const faqs = [
  {
    question: "How else do blood donations help?",
    answer: "When you donate blood, you're helping others and giving back to your community. Donated blood benefits people in local hospitals who need blood transfusions. Each whole blood donation may help as many as three people. Donated blood helps meet many medical needs, including those of people who have lost blood due to trauma, an organ transplant or other major surgery, as well as those who cannot make enough blood on their own due to illness or treatment."
  },
  {
    question: "How Often can I donate Blood?",
    answer: "For men, blood donation is recommended at maximum 3–4 times a year and for women 2–3 times a year, and for young women no more than once a year. For men, there must be at least 61 days between blood donations and for women, at least 91 days."
  },
  {
    question: "At what age can I start donating blood?",
    answer: "The age of the donor must be above 18 years and below 65 years of age. "
  },
  {
    question: "Can I donate blood?",
    answer: "The age of the donor must be above 18 years and below 65 years of age. He/she must have a haemoglobin count that is not less than 12.5 g/dl. The Weigh should not less than 45 kgs. One should have a normal body temperature at the time of donation."
  },
  {
    question: "Can I donate if I have a cold, flu or fever?",
    answer: "No. To donate, you must be symptom-free from cold, flu or fever on the day of donation."
  },
  {
    question: "Can I donate blood if I am under the care of a doctor or dentist?",
    answer: "You may be eligible to donate, depending on your condition. Donation is acceptable after routine teeth cleaning or dental work."
  },
  {
    question: "Can I donate blood if I am taking medicine?",
    answer: "Most medicines do not prevent you from donating blood. Common medicines do not affect your eligibility. Examples are blood pressure medicine, birth control pills and medicines you can get without a prescription. If you plan to donate platelets, you need to have stopped using aspirin or any aspirin-containing medicine 48 hours before your appointment. If you're taking antibiotics to treat a current infection, you must complete the course before donating. If you take a medicine to prevent contracting HIV (PrEP or PEP), you cannot donate blood for three months from your last dose if taken orally (by mouth) or for two years from your last does if taken by injection. For more information about other medicines, contact the Blood Donor Program."
  },
  {
    question: "What is blood made of?",
    answer: "Blood is made up of red blood cells, white blood cells, platelets, and plasma."
  },
  {
    question: "What is the purpose of separating blood into its components?",
    answer: "Separating blood into its components allows for specific blood components to be used in medical treatments. For example, red blood cells are used to treat anemia, while platelets are used for clotting disorders."
  },
  {
    question: "How is blood separated into components?",
    answer: "Blood is separated into components using a process called centrifugation."
  },
  {
    question: "What are red blood cells used for?",
    answer: "Red blood cells are used to treat anemia and improve oxygen delivery to tissues."
  },
  {
    question: "What are platelets used for?",
    answer: "Platelets are used to treat clotting disorders and prevent bleeding."
  },
  {
    question: "What are white blood cells used for?",
    answer: "White blood cells are used to fight infections and play a role in the immune response."
  },
  {
    question: "What is plasma used for?",
    answer: "Plasma is used to treat patients with clotting disorders and to replace lost blood volume."
  }
];

const FAQ = () => {
 
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  
  const filteredFaqs = faqs.filter(faq => faq.question.toLowerCase().includes(search.toLowerCase()));
 
  return (
    <div>
    <Navbar />
    <div className="faq">
      <h1>FAQ's</h1>
      <p>Know more about blood donation and how you can help people.</p>
      <input 
        type="text" 
        placeholder="Search" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      {filteredFaqs.map((faq, i) => (
        <div className="faq-item" key={i}>
          <div className="faq-question" onClick={() => toggle(i)}>
            <h3>{faq.question}</h3>
            <span>{selected === i ? <FaMinus /> : <FaPlus />}</span>
          </div>
          <div className={selected === i ? "faq-answer show" : "faq-answer"}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
    <FooterComponent />
    </div>
  );
};

export default FAQ;
