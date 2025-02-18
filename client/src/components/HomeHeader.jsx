import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/the-pwr-house-logo.jpeg";

function HomeHeader() {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="light">
      <Container>
        <Navbar.Brand href="/" className="brand-title">
        <img src={logo} alt="The PWR House" style={{ width: '300px', height: 'auto' }}/>
        </Navbar.Brand>
        <h5 style={{fontFamily: "American Typewriter", color: "4a5759"}}>Balancing work and family</h5>
      </Container>
    </Navbar>
  );
}

export default HomeHeader;