
import React, { useRef } from 'react';
import { Container, Row, Col, Form, Button, Tabs, Tab, Image } from 'react-bootstrap';

function Profile() {
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      // You can also implement additional logic to display the selected image
    }
  };
  
  return (
    <Container>
      <Row className="my-4">
        <Col md={3} className="text-center">
          <Image
            src="https://via.placeholder.com/150"
            roundedCircle
            className="mb-3"
          />
           <Button variant="danger" onClick={() => fileInputRef.current.click()}>
          Upload
        </Button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept=".jpg,.jpeg,.png"
          onChange={handleFileSelect}
        />
          <div className="mt-2">(Allowed JPG, JPEG or PNG.)</div>
          <div className="mt-1">Admin</div>
         
        </Col>
        <Col md={9}>
          <Tabs defaultActiveKey="basic" id="profile-tabs">
            <Tab eventKey="basic" title="Basic">
              <Form>
                <Form.Group controlId="hospitalName" className="my-3">
                  <Form.Label>Hospital Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Hospital Name" />
                </Form.Group>
                <Form.Group controlId="role" className="mb-3">
                  <Form.Label>Role</Form.Label>
                  <Form.Control type="text" value="Admin" readOnly />
                </Form.Group>
                <Form.Group controlId="creditLimitLeft" className="mb-3">
                  <Form.Label>Credit Limit Left</Form.Label>
                  <Form.Control type="text" value="0" readOnly />
                </Form.Group>
                <Form.Group controlId="creditLimit" className="mb-3">
                  <Form.Label>Credit Limit</Form.Label>
                  <Form.Control type="text" value="0" readOnly />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Button variant="primary">View</Button>
                  <div>
                    <Button variant="secondary" className="mr-2">Reset</Button>
                    <Button variant="danger">Next</Button>
                  </div>
                </div>
              </Form>
            </Tab>

            {/* -----------------Contact Information----------------------- */}
            <Tab eventKey="contact" title="Contact">
            <Form>
                <h5>Contact Information</h5>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="mobileNumber">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="text" placeholder="Mobile Number" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="category">
                      <Form.Label>Category</Form.Label>
                      <Form.Control as="select">
                        <option>Please Select a Category</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="address">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" placeholder="Enter Address" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <Form.Group controlId="state">
                      <Form.Label>State</Form.Label>
                      <Form.Control as="select">
                        <option>Select State</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="district">
                      <Form.Label>District</Form.Label>
                      <Form.Control as="select">
                        <option>Select District</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="pinCode">
                      <Form.Label>Pin Code</Form.Label>
                      <Form.Control type="text" placeholder="123456" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="country">
                      <Form.Label>Country</Form.Label>
                      <Form.Control type="text" defaultValue="India" readOnly />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="websiteUrl">
                      <Form.Label>Website URL</Form.Label>
                      <Form.Control type="text" placeholder="www.test.com" />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Authorized Person Details */}
                <h5 className="mt-4">Authorized Person Details</h5>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="fullName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Authorized Person Full Name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="user@gmail.com" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="aadhaarCard">
                      <Form.Label>Aadhaar Card Number</Form.Label>
                      <Form.Control type="text" placeholder="1234 5678 1234" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="phoneNumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="text" placeholder="9876543210" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="designationCertificate">
                      <Form.Label>Designation Certificate</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Bank Details */}
                <h5 className="mt-4">Bank Details</h5>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="recipientName">
                      <Form.Label>Recipient Name</Form.Label>
                      <Form.Control type="text" placeholder="Please Enter Recipient Name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="ifscCode">
                      <Form.Label>IFSC Code</Form.Label>
                      <Form.Control type="text" placeholder="Please Enter IFSC Code" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="accountNumber">
                      <Form.Label>Account Number</Form.Label>
                      <Form.Control type="text" placeholder="Please Enter Account Number" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="reEnterAccountNumber">
                      <Form.Label>Re-enter Account Number</Form.Label>
                      <Form.Control type="text" placeholder="Please Re-enter Account Number" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="cancelledCheque">
                      <Form.Label>Cancelled Cheque</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Other Details */}
                <h5 className="mt-4">Other Details</h5>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="gstNumber">
                      <Form.Label>GST Number</Form.Label>
                      <Form.Control type="text" placeholder="01AAAAA1234A1Z1" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="panCard">
                      <Form.Label>PAN Card</Form.Label>
                      <Form.Control type="text" placeholder="ABCDE1234E" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="registrationCertificate">
                      <Form.Label>Registration Certificate</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>
                
                {/* Buttons */}
                <div className="d-flex justify-content-between mt-4">
                  <Button variant="secondary">Reset</Button>
                  <Button variant="danger">Save</Button>
                </div>
              </Form>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
