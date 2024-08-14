import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Tabs, Tab, Image, Modal } from 'react-bootstrap';
import './Profile.css';
import NavBar from './NavBar';
import axios from 'axios';

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
  "West Bengal"
];

const districtsByState = {
  "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"],
  "Arunachal Pradesh": ["Tawang", "West Kameng", "East Kameng", "Papum Pare", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Upper Subansiri", "West Siang", "East Siang", "Siang", "Upper Siang", "Lower Siang", "Lower Dibang Valley", "Dibang Valley", "Anjaw", "Lohit", "Namsai", "Changlang", "Tirap", "Longding"],
  // ... add districts for other states
};


function Profile() {
  
  const fileInputRef = useRef(null);
  const [activeTab, setActiveTab] = useState('basic');
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');
  const [formData, setFormData] = useState({
    basic: {
      hospitalName: '',
      role: 'Admin',
      creditLimitLeft: '0',
      creditLimit: '0',
    },
    contact: {
      email: '',
      mobileNumber: '',
      category: '',
      address: '', // Changed from categoryaddress to address
      state: '',
      district: '',
      pinCode: '',
      country: 'India',
      websiteUrl: '',
      fullName: '',
      authorizedEmail: '',
      aadhaarCard: '',
      phoneNumber: '',
      designationCertificate: null,
      recipientName: '',
      ifscCode: '',
      accountNumber: '',
      reEnterAccountNumber: '',
      cancelledCheque: null,
      gstNumber: '',
      panCard: '',
      registrationCertificate: null,
    },
  });

  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();
  const [showViewModal, setShowViewModal] = useState(false);

  useEffect(() => {
    const isBasicValid = formData.basic.hospitalName !== '';
    const isContactValid = 
      formData.contact.email !== '' &&
      formData.contact.mobileNumber !== '' &&
      // formData.contact.category !== '' &&
      formData.contact.address !== '' &&
      formData.contact.state !== '' &&
      formData.contact.district !== '' &&
      formData.contact.pinCode !== '' &&
      formData.contact.fullName !== '' &&
      formData.contact.authorizedEmail !== '' &&
      formData.contact.aadhaarCard !== '' &&
      formData.contact.phoneNumber !== '' &&
      formData.contact.recipientName !== '' &&
      formData.contact.ifscCode !== '' &&
      formData.contact.accountNumber !== '' &&
      formData.contact.reEnterAccountNumber !== '' &&
      formData.contact.gstNumber !== '' &&
      formData.contact.panCard !== '';

    setFormValid(isBasicValid && isContactValid);
  }, [formData]);

  

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };
  
  const handleInputChange = (section, field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleReset = (section) => {
    setFormData(prevData => ({
      ...prevData,
      [section]: Object.fromEntries(
        Object.keys(prevData[section]).map(key => [key, ''])
      ),
    }));
    if (section === 'basic') {
      setFormData(prevData => ({
        ...prevData,
        basic: {
          ...prevData.basic,
          role: 'Admin',
          creditLimitLeft: '0',
          creditLimit: '0',
        },
      }));
    }
    if (section === 'contact') {
      setFormData(prevData => ({
        ...prevData,
        contact: {
          ...prevData.contact,
          country: 'India',
        },
      }));
    }
  };

  const handleSaveAndView = () => {
    setShowViewModal(true);
  };

  const handleSubmit = async () => {
    try {
      // Combine basic and contact information into a single object
      const profileData = {
        ...formData.basic,
        ...formData.contact
      };
  
      const response = await axios.post('http://localhost:8383/api/profiles', profileData);
      
      if (response.status === 200) {
        alert('Profile data saved successfully!');
        navigate('/HospitalHomePage');
      } else {
        alert('An error occurred while saving the data. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while saving the data. Please try again.');
    }
  };
  
  return (
    <Container>
      <NavBar/>
      <Row className="my-4">
     
        <Col md={9}>
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            id="profile-tabs"
          >
            <Tab eventKey="basic" title="Basic">
              <Form>
                <Form.Group controlId="hospitalName" className="my-3">
                  <Form.Label>Hospital Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Hospital Name" 
                    value={formData.basic.hospitalName}
                    onChange={(e) => handleInputChange('basic', 'hospitalName', e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="role" className="mb-3">
                  <Form.Label>Role</Form.Label>
                  <Form.Control type="text" value={formData.basic.role} readOnly />
                </Form.Group>
                <Form.Group controlId="creditLimitLeft" className="mb-3">
                  <Form.Label>Credit Limit Left</Form.Label>
                  <Form.Control type="text" value={formData.basic.creditLimitLeft} readOnly />
                </Form.Group>
                <Form.Group controlId="creditLimit" className="mb-3">
                  <Form.Label>Credit Limit</Form.Label>
                  <Form.Control type="text" value={formData.basic.creditLimit} readOnly />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={() => handleReset('basic')}>Reset</Button>
                  <Button variant="danger" onClick={() => setActiveTab('contact')}>Next</Button>
                </div>
              </Form>
            </Tab>

            <Tab eventKey="contact" title="Contact">
              <Form>
                {/* Contact Information */}
                <h5>Contact Information</h5>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>Contact Email <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={formData.contact.email}
                        onChange={(e) => handleInputChange('contact', 'email', e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="mobileNumber">
                      <Form.Label>Mobile Number <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Mobile Number" 
                        value={formData.contact.mobileNumber}
                        onChange={(e) => handleInputChange('contact', 'mobileNumber', e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="category">
                      <Form.Label>Category</Form.Label>
                      <Form.Control as="select"
                      value={formData.contact.category}
                      onChange={(e) => handleInputChange('contact', 'category', e.target.value)}
                      >
                        <option>Please Select a Category</option>
                        
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="address">
                      <Form.Label>Address<span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="Enter Address" 
                       value={formData.contact.address}
                       onChange={(e) => handleInputChange('contact', 'address', e.target.value)}
                       required
                       />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
            <Col md={4}>
              <Form.Group controlId="state">
                <Form.Label>State <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                  as="select" 
                  value={formData.contact.state}
                  onChange={(e) => {
                    handleInputChange('contact', 'state', e.target.value);
                    // Reset district when state changes
                    handleInputChange('contact', 'district', '');
                  }}
                  required
                >
                  <option value="">Select State</option>
                  {indianStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="district">
                <Form.Label>District <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                   as="select" 
                    value={formData.contact.district}
                    onChange={(e) => handleInputChange('contact', 'district', e.target.value)}
                    required
                    disabled={!formData.contact.state}
                >
  <option value="">Select District</option>
  {formData.contact.state && districtsByState[formData.contact.state]?.map(district => (
    <option key={district} value={district}>{district}</option>
  ))}
</Form.Control>
              </Form.Group>
            </Col>
                  <Col md={4}>
                    <Form.Group controlId="pinCode">
                      <Form.Label>Pin Code <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="123456" 
                      value={formData.contact.pinCode}
                      onChange={(e) => handleInputChange('contact', 'pinCode', e.target.value)}
                      required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="country">
                      <Form.Label>Country</Form.Label>
                      <Form.Control type="text" defaultValue="India" readOnly  />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="websiteUrl">
                      <Form.Label>Website URL</Form.Label>
                      <Form.Control type="text" placeholder="www.test.com"
                      value={formData.contact.websiteUrl}
                      onChange={(e) => handleInputChange('contact', 'websiteUrl', e.target.value)}
                      
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* ... (Other contact information fields) ... */}

                {/* Authorized Person Details */}
                <h5 className="mt-4">Authorized Person Details</h5>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="fullName">
                      <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="Authorized Person Full Name" 
                      value={formData.contact.fullName}
                      onChange={(e) => handleInputChange('contact', 'fullName', e.target.value)}
                      required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="authorizedEmail">
                      <Form.Label>Authorized Email <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="email" placeholder="user@gmail.com"
                      value={formData.contact.authorizedEmail}
                      onChange={(e) => handleInputChange('contact', 'authorizedEmail', e.target.value)}
                      required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
  <Col md={6}>
    <Form.Group controlId="aadhaarCard">
      <Form.Label>Aadhaar Card Number <span className="text-danger">*</span></Form.Label>
      <Form.Control
        type="text"
        placeholder="1234 5678 1234"
        value={formData.contact.aadhaarCard}
        onChange={(e) => handleInputChange('contact', 'aadhaarCard', e.target.value.replace(/\D/g, ''))}
        required
        maxLength={12}  // Ensures only 12 characters are allowed
        pattern="\d{12}" // Ensures that only 12 digits are entered
        title="Aadhaar Card Number must be 12 digits"
      />
    </Form.Group>
  </Col>
  <Col md={6}>
    <Form.Group controlId="phoneNumber">
      <Form.Label>Phone Number <span className="text-danger">*</span></Form.Label>
      <Form.Control
        type="text"
        placeholder="9876543210"
        value={formData.contact.phoneNumber}
        onChange={(e) => handleInputChange('contact', 'phoneNumber', e.target.value.replace(/\D/g, ''))}
        required
        maxLength={10}  // Ensures only 10 characters are allowed
        pattern="\d{10}" // Ensures that only 10 digits are entered
        title="Phone Number must be 10 digits"
      />
    </Form.Group>
  </Col>
</Row>

                <Row>
                  <Col md={6}>
                    <Form.Group controlId="designationCertificate">
                      <Form.Label>Designation Certificate </Form.Label>
                      <Form.Control type="file" 
                      
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* ... (Authorized person fields) ... */}

                {/* Bank Details */}
                <h5 className="mt-4">Bank Details</h5>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="recipientName">
                      <Form.Label>Recipient Name <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="Please Enter Recipient Name" 
                      value={formData.contact.recipientName}
                      onChange={(e) => handleInputChange('contact', 'recipientName', e.target.value)}
                      required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="ifscCode">
                      <Form.Label>IFSC Code <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="Please Enter IFSC Code"
                      value={formData.contact.ifscCode}
                      onChange={(e) => handleInputChange('contact', 'ifscCode', e.target.value)}
                      required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="accountNumber">
                      <Form.Label>Account Number <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="Please Enter Account Number" 
                      value={formData.contact.accountNumber}
                      onChange={(e) => handleInputChange('contact', 'accountNumber', e.target.value)}
                      required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="reEnterAccountNumber">
                      <Form.Label>Re-enter Account Number <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="Please Re-enter Account Number"
                      value={formData.contact.reEnterAccountNumber}
                      onChange={(e) => handleInputChange('contact', 'reEnterAccountNumber', e.target.value)}
                      required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="cancelledCheque">
                      <Form.Label>Cancelled Cheque </Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>

                {/* ... (Bank details fields) ... */}

                {/* Other Details */}
                <h5 className="mt-4">Other Details</h5>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="gstNumber">
                      <Form.Label>GST Number <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="01AAAAA1234A1Z1" 
                      value={formData.contact.gstNumber}
                      onChange={(e) => handleInputChange('contact', 'gstNumber', e.target.value)}
                      required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="panCard">
                      <Form.Label>PAN Card <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="ABCDE1234E" 
                      value={formData.contact.panCard}
                      onChange={(e) => handleInputChange('contact', 'panCard', e.target.value)}
                      required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="registrationCertificate">
                      <Form.Label>Registration Certificate </Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>

                {/* ... (Other details fields) ... */}
                
                <div className="d-flex justify-content-between mt-4">
            <Button variant="secondary" onClick={() => handleReset('contact')}>Reset</Button>
            <Button variant="danger" onClick={handleSaveAndView}>Save and View</Button>
            <Button variant="primary" onClick={handleSubmit} disabled={!formValid}>Submit</Button>
          </div>
              </Form>
            </Tab>
          </Tabs>
        </Col>
      </Row>

      {/* View Modal */}
      <Modal show={showViewModal} onHide={() => setShowViewModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Profile Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Basic Information</h4>
          <p><strong>Hospital Name:</strong> {formData.basic.hospitalName}</p>
          <p><strong>Role:</strong> {formData.basic.role}</p>
          <p><strong>Credit Limit Left:</strong> {formData.basic.creditLimitLeft}</p>
          <p><strong>Credit Limit:</strong> {formData.basic.creditLimit}</p>
          {/* Basic information */}

          <h4>Contact Information</h4>
          <p><strong>Email:</strong> {formData.contact.email}</p>
          <p><strong>Mobile Number:</strong> {formData.contact.mobileNumber}</p>
          <p><strong>Category:</strong> {formData.contact.category}</p>
          <p><strong>Address:</strong> {formData.contact.address}</p>
          <p><strong>State:</strong> {formData.contact.state}</p>
          <p><strong>District:</strong> {formData.contact.district}</p>
          <p><strong>Pin Code:</strong> {formData.contact.pinCode}</p>
          <p><strong>Country:</strong> {formData.contact.country}</p>
          <p><strong>WebSite URL:</strong> {formData.contact.websiteUrl}</p>
          {/* ... (Display other contact information) ... */}

          <h4>Authorized Person Details</h4>
          <p><strong>Full Name:</strong> {formData.contact.fullName}</p>
          <p><strong>Email:</strong> {formData.contact.authorizedEmail}</p>
          <p><strong>Aadhaar Card:</strong> {formData.contact.aadhaarCard}</p>
          <p><strong>Phone No:</strong> {formData.contact.phoneNumber}</p>
          <p><strong>Designation Certificate:</strong> {formData.contact.designationCertificate}</p>
          {/* ... (Display authorized person details) ... */}

          <h4>Bank Details</h4>
          <p><strong>Recipient Name:</strong> {formData.contact.recipientName}</p>
          <p><strong>IFSC Code:</strong> {formData.contact.ifscCode}</p>
          <p><strong>Account Number:</strong> {formData.contact.accountNumber}</p>
          <p><strong>Re-Enter Account Number:</strong> {formData.contact.reEnterAccountNumber}</p>
          {/* ... (Display bank details) ... */}

          <h4>Other Details</h4>
          <p><strong>GST Number:</strong> {formData.contact.gstNumber}</p>
          <p><strong>Pan Card:</strong> {formData.contact.panCard}</p>
          <p><strong>Registration Certificate:</strong> {formData.contact.registrationCertificate}</p>
          {/* ... (Display other details) ... */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowViewModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Profile;