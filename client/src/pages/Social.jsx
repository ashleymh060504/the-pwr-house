import React from "react";
import HeaderSocial from "../components/HeaderSocial";
import "../styles/index.css";
import { Container } from "react-bootstrap";


function Social() {
  return (
    <>
    <HeaderSocial/>
    <Container fluid style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 >PWR Connect coming soon!</h1>
    </Container>
    </>
  );
}

export default Social;

