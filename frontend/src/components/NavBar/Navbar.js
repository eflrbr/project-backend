import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">PetConnect</Navbar.Brand> {/* Logo placed in the center */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="navbar-nav"> {/* Nav links centered beneath the logo */}
            <Nav.Link href="/adoption">Adopt</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
