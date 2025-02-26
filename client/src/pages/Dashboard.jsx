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

function Dashboard() {
  const [onEventAdded, setOnEventAdded] = useState(false)
  const handleTaskAdded = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Calendar onEventAdded={onEventAdded}/>
          </Col>
          <Col>
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