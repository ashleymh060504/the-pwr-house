import React from "react";
import HeaderSocial from "../components/HeaderSocial";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import "../styles/index.css";
import { Container } from "react-bootstrap";
import { useState } from "react";


function Social() {
  const [refresh, setRefresh] = useState(false);
  const token = localStorage.getItem("token");

  return (
    <>
    <HeaderSocial/>
    <Container fluid style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 >PWR Connect under construction...</h1>
      <PostForm token={token} onPostAdded={() => setRefresh(!refresh)} />
      <PostList token={token} key={refresh} />
    </Container>
    </>
  );
}

export default Social;

