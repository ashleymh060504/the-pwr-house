import Calendar from "../components/Calendar";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import EventForm from "../components/EventForm";
import TaskList from "../components/TaskList";
import "../styles/index.css";
import TaskForm from "../components/TaskForm";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/homePage.css";

function Dashboard() {
  const [onEventAdded, setOnEventAdded] = useState(false)
  const [onTaskAdded, setOnTaskAdded] = useState(false); 
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Header />
      <Container fluid className="img-fluid background-image">
      <h2 style={{marginTop: "30px", marginBottom: "20px", textAlign: "center"}}>Welcome to your dashboard.</h2>
      <h5 style={{marginBottom: "60px", textAlign: "center"}}>Use the forms at the bottom of the page to add events to the calendar, or tasks to your To Do list!<br></br>Click on the events in your calendar to view or edit them.<br></br>And check the boxes next to your Tasks as you complete them(delete when ready)!</h5>
        <Row>
          <Col xs={12} md={8}>
            <Calendar onEventAdded={onEventAdded}/>
          </Col>
          <Col xs={12} md={4}>
            <TaskList onTaskAdded={onTaskAdded}/>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <div style={{ width: "100%", maxWidth: "500px" }}>
              <EventForm onEventAdded={onEventAdded} setOnEventAdded={setOnEventAdded}/>
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <div style={{ width: "100%", maxWidth: "500px" }}>
              <TaskForm onTaskAdded={onTaskAdded} setOnTaskAdded={setOnTaskAdded}/>
            </div>
          </Col>
      </Row>
    </Container>
    </>
  );
}
  
export default Dashboard;