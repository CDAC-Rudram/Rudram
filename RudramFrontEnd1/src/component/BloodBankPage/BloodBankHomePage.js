import { useState } from 'react';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import './BloodBankHomePage.css'; // Ensure this file exists

import BloodBankNavbar from './BloodBankNavbar';

function CampOrganizerHomePage() {
  const [uniqueNumber, setUniqueNumber] = useState('');
  const [donorData, setDonorData] = useState(null);
  const [error, setError] = useState('');
  const [isEditingBloodType, setIsEditingBloodType] = useState(false);
  const [newBloodType, setNewBloodType] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validatePhoneNumber(uniqueNumber)) {
      setError('Phone number must be exactly 10 digits long, must not start with 0, and must not be a repeating pattern.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8383/api/donors/${uniqueNumber}`);
      if (response.ok) {
        const donor = await response.json();

        if (donor.age >= 18) {
          setDonorData(donor);
          setError('');
          setNewBloodType(donor.bloodType);
          setSuccessMessage('');
        } else {
          setDonorData(null);
          setError('User is underage and cannot donate blood.');
          setSuccessMessage('');
        }
      } else {
        setDonorData(null);
        setError('No donor found with the provided unique number.');
        setSuccessMessage('');
      }
    } catch (error) {
      setError('Error fetching donor data.');
    }
  };

  const validatePhoneNumber = (number) => {
    const digits = number.replace(/\D/g, '');
    const isValidLength = digits.length === 10;
    const doesNotStartWithZero = !digits.startsWith('0');
    const isRepeatingPattern = /^(0|1|2|3|4|5|6|7|8|9)\1{9}$/.test(digits);

    return isValidLength && doesNotStartWithZero && !isRepeatingPattern;
  };

  const handleBloodTypeEdit = () => {
    setIsEditingBloodType(true);
  };

  const handleBloodTypeSave = async () => {
    if (donorData && validateBloodType(newBloodType)) {
      try {
        const response = await fetch(`http://localhost:8383/api/donors/${uniqueNumber}/bloodType`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ bloodType: newBloodType }),
        });

        if (response.ok) {
          const result = await response.json();
          setDonorData((prevData) => ({
            ...prevData,
            bloodType: newBloodType,
          }));
          setIsEditingBloodType(false);
          setSuccessMessage('Blood type updated successfully.');
        } else {
          setError('Failed to update blood type.');
        }
      } catch (error) {
        setError('Error updating blood type.');
      }
    } else {
      setError('Invalid blood type. Please enter a valid blood type (e.g., A+, B-, O+).');
    }
  };

  const validateBloodType = (bloodType) => {
    const validBloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    return validBloodTypes.includes(bloodType);
  };

  const handleGrantCoupon = async () => { 
    if (donorData) {
      const currentDate = new Date();
      const donationDate = new Date(donorData.donationDate);

      const diffTime = currentDate - donationDate;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays >= 120) {
        try {
          const response = await fetch(`http://localhost:8383/api/donors/${uniqueNumber}/grantCoupon`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({}), // Empty body if not needed
          });

          if (response.ok) {
            // Check if response is JSON or text
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
              const result = await response.json();
              setSuccessMessage(result.message);
            } else {
              const text = await response.text();
              setSuccessMessage(text); // Assuming text response is the message
            }

            // Set a timer to refresh the page after 7 seconds
            setTimeout(() => {
              window.location.reload();
            }, 7000); // 7 seconds
          } else {
            setError('Failed to grant coupon.');
          }
        } catch (error) {
          console.error(error);
          setError('Error granting coupon.');
        }
      } else {
        setError('Cannot grant coupon. Donation date must be at least 120 days ago.');
      }
    }
  };

  return (
    <div>
    <BloodBankNavbar />
    <Container>
      
      <Row className="my-4">
        <Col md={12}>
          <h4>My Donor</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="uniqueNumber" className="my-3">
              <Form.Label>Donor Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone Number"
                required
                pattern="\d*"
                maxLength={10}
                onChange={(e) => setUniqueNumber(e.target.value)}
                value={uniqueNumber}
                title="Phone number must be exactly 10 digits long, must not start with 0, and must not be a repeating pattern."
              />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>

          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
          {successMessage && <Alert variant="success" className="mt-3">{successMessage}</Alert>}

          {donorData && (
            <div className="mt-4">
              <h5>Donor Details</h5>
              <p><strong>Name:</strong> {donorData.name}</p>
              <p><strong>Age:</strong> {donorData.age}</p>

              <p><strong>Blood Type:</strong>
                {isEditingBloodType ? (
                  <>
                    <Form.Control
                      type="text"
                      value={newBloodType}
                      onChange={(e) => setNewBloodType(e.target.value)}
                      className="d-inline-block w-auto ml-2"
                    />
                    <Button
                      variant="success"
                      size="sm"
                      onClick={handleBloodTypeSave}
                      className="ml-2"
                    >
                      Save
                    </Button>
                  </>
                ) : (
                  <>
                    {donorData.bloodType}
                    <Button
                      variant="link"
                      size="sm"
                      onClick={handleBloodTypeEdit}
                      className="ml-2"
                    >
                      Edit
                    </Button>
                  </>
                )}
              </p>

              <p><strong>Donation Date:</strong> {donorData.donationDate}</p>
              <Button variant="info" onClick={handleGrantCoupon} className="mt-3">
                Grant Coupon
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default CampOrganizerHomePage;
