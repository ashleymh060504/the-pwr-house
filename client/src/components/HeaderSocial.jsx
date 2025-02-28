import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/the-pwr-house-logo.jpeg";

const HeaderSocial = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/dashboard">
          <img src={logo} alt="The PWR House" style={{ width: '300px', height: 'auto', borderRadius: '8px', borderStyle: 'solid', borderColor: '#b0c4b1' }}/>
        </Navbar.Brand>
        <h5 style={{fontFamily: "American Typewriter", color: "4a5759", marginTop: '10px'}}>Balancing work and family</h5>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="/dashboard"className="nav-link">Dashboard</Nav.Link>
            <Nav.Link href="/" className="nav-link">Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderSocial;
