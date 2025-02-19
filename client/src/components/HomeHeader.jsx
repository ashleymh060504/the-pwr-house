import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/the-pwr-house-logo.jpeg";

function HomeHeader() {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="light" style={{ position: "fixed" }}>
      <Container>
        <Navbar href="/" className="brand-title">
          <div style={{ textAlign: "center", color: "4a5759" }}>
            <img src={logo} alt="The PWR House" style={{ width: '300px', height: 'auto', borderRadius: '8px', borderStyle: 'solid', borderColor: '#edafb8' }}/>
            <h5 style={{fontFamily: "American Typewriter", fontWeight: "bold", marginTop: '10px'}}>Balancing work and family</h5>
          </div>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default HomeHeader;