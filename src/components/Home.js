import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Tabs, Tab, Form, Alert } from 'react-bootstrap';

function Home() {
  const [key, setKey] = useState('home');
  const [uniqueNumber, setUniqueNumber] = useState('');
  const [donorData, setDonorData] = useState(null);
  const [error, setError] = useState('');

  const donorDatabase = {
    '12345': { name: 'John Doe', age: 30, bloodType: 'A+', donationDate: '2024-08-10' },
    '67890': { name: 'Jane Smith', age: 28, bloodType: 'O-', donationDate: '2024-07-15' },
    // Add more donor data as needed
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredUniqueNumber = event.target.elements.uniqueNumber.value;
    const donor = donorDatabase[enteredUniqueNumber];
    
    if (donor) {
      setDonorData(donor);
      setError('');
    } else {
      setDonorData(null);
      setError('No donor found with the provided unique number.');
    }
  };

  return (
    <Container>
      <Row className="my-4">
        <Col md={12}>
          <Tabs
            id="home-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="home" title="Home">
              <div className="text-center">
                <h1>Welcome to the Home Page</h1>
                <p>This is the home page content.</p>
                <Image
                  src="https://via.placeholder.com/150"
                  roundedCircle
                  className="mb-3"
                />
                <div>
                  <Button variant="primary" className="mx-2">Get Started</Button>
                  <Button variant="secondary" className="mx-2">Learn More</Button>
                </div>
              </div>
            </Tab>
            <Tab eventKey="donor" title="My Donor">
              <h5>Enter Your Unique Number</h5>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="uniqueNumber" className="my-3">
                  <Form.Label>User Unique Number</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter Unique Number" 
                    required 
                    onChange={(e) => setUniqueNumber(e.target.value)}
                    value={uniqueNumber}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
              
              {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
              
              {donorData && (
                <div className="mt-4">
                  <h5>Donor Details</h5>
                  <p><strong>Name:</strong> {donorData.name}</p>
                  <p><strong>Age:</strong> {donorData.age}</p>
                  <p><strong>Blood Type:</strong> {donorData.bloodType}</p>
                  <p><strong>Donation Date:</strong> {donorData.donationDate}</p>
                </div>
              )}
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
