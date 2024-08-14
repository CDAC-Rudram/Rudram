import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand as={Link} to="/">Hospital Registration</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {/* Other nav links */}
        <Nav.Link as={Link} to="/HospitalHomePage">Home</Nav.Link>
        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
      </Nav>
      <Nav className="ml-auto"> {/* ml-auto pushes this Nav component to the right */}
        <Nav.Link as={Link} to="/" className="logout-button">Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default NavBar;

