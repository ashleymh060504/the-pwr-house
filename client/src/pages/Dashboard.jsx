import Calendar from "../components/Calendar";
import React, { useState } from "react";
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
  const handleTaskAdded = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Header />
      <Container fluid className="img-fluid background-image">
      <h2 style={{marginTop: "30px", marginBottom: "20px", textAlign: "center"}}>Welcome to your dashboard.</h2>
      <h5 style={{marginBottom: "60px", textAlign: "center"}}>Here you can manage your events and tasks.<br></br> Use the forms at the bottom of the page to add events to the calendar, <br></br>or tasks to your To Do list!</h5>
        <Row>
          <Col>
            <Calendar onEventAdded={onEventAdded}/>
          </Col>
          <Col xs={4}>
            <TaskList/>
          </Col>
        </Row>
        <Row>
          <Col>
            <EventForm onEventAdded={onEventAdded} setOnEventAdded={setOnEventAdded}/>
          </Col>
          <Col>
            <TaskForm onTaskAdded={handleTaskAdded} />
          </Col>
      </Row>
    </Container>
    </>
  );
}
  
export default Dashboard;