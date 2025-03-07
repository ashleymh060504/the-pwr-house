import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/the-pwr-house-logo.jpeg";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/dashboard">
          <img src={logo} alt="The PWR House" style={{ width: '300px', height: 'auto', borderRadius: '8px', borderStyle: 'solid', borderColor: '#b0c4b1' }}/>
        </Navbar.Brand>
        <h5 style={{ marginTop: '10px'}}>Balancing work and family</h5>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="/social"className="nav-link">PWR Connect</Nav.Link>
            <Nav.Link href="/" className="nav-link">Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
