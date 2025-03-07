import React from "react";
import HeaderSocial from "../components/HeaderSocial";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import "../styles/index.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import "../styles/homePage.css";


function Social() {
  const [refresh, setRefresh] = useState(false);
  const token = localStorage.getItem("token");

  return (
    <>
    <HeaderSocial/>
    <Container fluid style={{ textAlign: "center", marginTop: "100px" }} className="img-fluid background-image">
      <h1 >PWR Connect</h1>
      <h4>Share your thoughts with your fellow PWR's</h4>
      <PostForm token={token} onPostAdded={() => setRefresh(!refresh)} />
      <PostList token={token} key={refresh} />
    </Container>
    </>
  );
}

export default Social;

