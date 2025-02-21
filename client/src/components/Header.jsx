import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/the-pwr-house-logo.jpeg";

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="brand-title">
          <img src={logo} alt="The PWR House" style={{ width: '300px', height: 'auto', borderRadius: '8px', borderStyle: 'solid', borderColor: '#b0c4b1' }}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/dashboard" className="nav-link">Dashboard</Nav.Link>
            <Nav.Link href="/social" className="nav-link">PWR Connect</Nav.Link>
            <Nav.Link href="/" className="nav-link">Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
