import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Tabs, Tab, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DonorNavbar from './DonorNavbar';

function Profile() {
  const [activeTab, setActiveTab] = useState('basic');
  const [formData, setFormData] = useState({
    basic: {
      fullName: '',
      dateofbirth: '',
      age: '',
      gender: '',
      bloodgroup: '',
    },
    contact: {
      email: '',
      countryCode: '+91',
      mobileNumber: '',
      address: '',
      state: '',
      district: '',
      pinCode: '',
      country: 'India',
      lastDonatedDate: '',
    },
  });
  const [errors, setErrors] = useState({
    basic: {},
    contact: {},
    ageValidation: false,
  });
  const [showViewModal, setShowViewModal] = useState(false);

  const calculateAge = (dateOfBirth) => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleInputChange = (section, field, value) => {
    setFormData(prevData => {
      const updatedData = {
        ...prevData,
        [section]: {
          ...prevData[section],
          [field]: value,
        },
      };

      // Calculate age when date of birth is updated
      if (section === 'basic' && field === 'dateofbirth') {
        const age = calculateAge(value);
        updatedData.basic.age = age;
        if (age < 18 || age > 65) {
          setErrors(prevErrors => ({
            ...prevErrors,
            ageValidation: true,
          }));
        } else {
          setErrors(prevErrors => ({
            ...prevErrors,
            ageValidation: false,
          }));
        }
      }

      return updatedData;
    });
  };

  const validate = () => {
    const newErrors = { basic: {}, contact: {} };
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[789]\d{9}$/; // Accepts only 10-digit numbers starting with 7, 8, or 9
    const pincodePattern = /^[1-9]\d{5}$/;
  
    // Basic Information Validation
    if (!formData.basic.fullName) newErrors.basic.fullName = 'Full Name is required';
    if (!formData.basic.dateofbirth) newErrors.basic.dateofbirth = 'Date of Birth is required';
    if (errors.ageValidation) newErrors.basic.age = 'Donor cannot register due to age limit';
    if (!formData.basic.gender) newErrors.basic.gender = 'Gender is required';
  
    // Contact Information Validation
    if (!emailPattern.test(formData.contact.email)) newErrors.contact.email = 'Invalid email address';
    if (!/^\d+$/.test(formData.contact.mobileNumber)) {
      newErrors.contact.mobileNumber = 'Mobile number should contain only digits';
    } else if (!phonePattern.test(formData.contact.mobileNumber)) {
      newErrors.contact.mobileNumber = 'Invalid mobile number';
    }
    if (!pincodePattern.test(formData.contact.pinCode)) newErrors.contact.pinCode = 'Invalid pincode';
  
    setErrors(newErrors);
    return Object.keys(newErrors.basic).length === 0 && Object.keys(newErrors.contact).length === 0;
  };
  
  const handleSaveAndView = () => {
    if (validate()) {
      setShowViewModal(true);
    }
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
          countryCode: '+91',
        },
      }));
    }
    setErrors(prevErrors => ({
      ...prevErrors,
      [section]: {}
    }));
  };

  const handleSubmit = () => {
    if (validate()) {
      const profileData = {
        ...formData.basic,
        ...formData.contact
      };

      axios.post('http://localhost:8080/api/donors/profile', profileData)
        .then(response => {
          console.log('Profile saved successfully:', response.data);
          alert('Profile saved successfully');
          // Redirect or take any action after successful save
        })
        .catch(error => {
          console.error('There was an error saving the profile!', error);
          alert('There was an error saving the profile');
        });
    }
  };

  return (
    <div>
      <DonorNavbar />
    <Container>
      <Row className="my-4">
        <Col md={{ span: 9, offset: 3 }}>
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            id="profile-tabs"
          >
            <Tab eventKey="basic" title="Basic">
              <Form>
                <Form.Group controlId="fullName" className="my-3">
                  <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Full Name" 
                    value={formData.basic.fullName}
                    onChange={(e) => handleInputChange('basic', 'fullName', e.target.value)}
                    isInvalid={!!errors.basic.fullName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.basic.fullName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="dateOfBirth" className="my-3">
                  <Form.Label>Date of Birth<span className="text-danger">*</span></Form.Label>
                  <Form.Control 
                    type="date" 
                    value={formData.basic.dateofbirth}
                    onChange={(e) => handleInputChange('basic', 'dateofbirth', e.target.value)}
                    isInvalid={!!errors.basic.dateofbirth || errors.ageValidation}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.basic.dateofbirth || (errors.ageValidation && 'Donor cannot register due to age limit')}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="age" className="my-3">
                  <Form.Label>Age<span className="text-danger">*</span></Form.Label>
                  <Form.Control 
                    type="number" 
                    value={formData.basic.age}
                    readOnly
                    isInvalid={errors.ageValidation}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.ageValidation && 'Donor cannot register due to age limit'}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="gender" className="my-3">
                  <Form.Label>Gender<span className="text-danger">*</span></Form.Label>
                  <Form.Control 
                    as="select"
                    value={formData.basic.gender}
                    onChange={(e) => handleInputChange('basic', 'gender', e.target.value)}
                    isInvalid={!!errors.basic.gender}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.basic.gender}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="bloodgroup" className="my-3">
                  <Form.Label>Blood Group</Form.Label>
                  <Form.Control 
                    as="select"
                    value={formData.basic.bloodgroup}
                    onChange={(e) => handleInputChange('basic', 'bloodgroup', e.target.value)}
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </Form.Control>
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={() => handleReset('basic')}>Reset</Button>
                  <Button variant="danger" onClick={handleSaveAndView}>Save & View</Button>
                </div>
              </Form>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={formData.contact.email}
                        onChange={(e) => handleInputChange('contact', 'email', e.target.value)}
                        isInvalid={!!errors.contact.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.contact.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="mobileNumber">
                      <Form.Label>Mobile Number <span className="text-danger">*</span></Form.Label>
                      <Row>
                        <Col md={4}>
                          <Form.Control 
                            as="select"
                            value={formData.contact.countryCode}
                            onChange={(e) => handleInputChange('contact', 'countryCode', e.target.value)}
                          >
                            <option value="+91">+91</option>
                            <option value="+1">+1</option>
                            {/* Add more country codes as needed */}
                          </Form.Control>
                        </Col>
                        <Col md={8}>
                          <Form.Control 
                            type="text" 
                            placeholder="Enter mobile number" 
                            value={formData.contact.mobileNumber}
                            onChange={(e) => handleInputChange('contact', 'mobileNumber', e.target.value)}
                            isInvalid={!!errors.contact.mobileNumber}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.contact.mobileNumber}
                          </Form.Control.Feedback>
                        </Col>
                      </Row>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="Enter address" 
                    value={formData.contact.address}
                    onChange={(e) => handleInputChange('contact', 'address', e.target.value)}
                  />
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="state">
                      <Form.Label>State</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Enter state" 
                        value={formData.contact.state}
                        onChange={(e) => handleInputChange('contact', 'state', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="district">
                      <Form.Label>District</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Enter district" 
                        value={formData.contact.district}
                        onChange={(e) => handleInputChange('contact', 'district', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="pinCode">
                  <Form.Label>Pincode <span className="text-danger">*</span></Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter pincode" 
                    value={formData.contact.pinCode}
                    onChange={(e) => handleInputChange('contact', 'pinCode', e.target.value)}
                    isInvalid={!!errors.contact.pinCode}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.contact.pinCode}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="country">
                  <Form.Label>Country</Form.Label>
                  <Form.Control 
                    type="text" 
                    value="India" 
                    readOnly
                  />
                </Form.Group>
                <Form.Group controlId="lastDonatedDate">
                  <Form.Label>Last Donated Date</Form.Label>
                  <Form.Control 
                    type="date" 
                    value={formData.contact.lastDonatedDate}
                    onChange={(e) => handleInputChange('contact', 'lastDonatedDate', e.target.value)}
                  />
                </Form.Group>
                <div className="mt-4 d-flex justify-content-between">
      <Button variant="secondary" onClick={() => handleReset('contact')}>Reset</Button>
      <div>
      <Button variant="danger" onClick={handleSaveAndView}>Save & View</Button>
      <Button variant="primary" className="mr-2" onClick={handleSubmit}>Submit</Button>
       
      </div>
    </div>
              </Form>
            </Tab>
          </Tabs>
        </Col>
      </Row>
      <Modal
        show={showViewModal}
        onHide={() => setShowViewModal(false)}
        size="lg"
        aria-labelledby="view-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>View Donor Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Basic Information</h5>
          <p><strong>Full Name:</strong> {formData.basic.fullName}</p>
          <p><strong>Date of Birth:</strong> {formData.basic.dateofbirth}</p>
          <p><strong>Age:</strong> {formData.basic.age}</p>
          <p><strong>Gender:</strong> {formData.basic.gender}</p>
          <p><strong>Blood Group:</strong> {formData.basic.bloodgroup}</p>
          <h5>Contact Information</h5>
          <p><strong>Email:</strong> {formData.contact.email}</p>
          <p><strong>Mobile Number:</strong> {formData.contact.countryCode} {formData.contact.mobileNumber}</p>
          <p><strong>Address:</strong> {formData.contact.address}</p>
          <p><strong>State:</strong> {formData.contact.state}</p>
          <p><strong>District:</strong> {formData.contact.district}</p>
          <p><strong>Pincode:</strong> {formData.contact.pinCode}</p>
          <p><strong>Country:</strong> {formData.contact.country}</p>
          <p><strong>Last Donated Date:</strong> {formData.contact.lastDonatedDate || 'N/A'}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowViewModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </div>
  );
}

export default Profile;
