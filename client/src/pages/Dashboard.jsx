import Calendar from "../components/Calendar";
import React, { useState } from "react";
import Header from "../components/Header";
import EventForm from "../components/EventForm";
import TaskList from "../components/TaskList";

function Dashboard() {
  const [onEventAdded, setOnEventAdded] = useState(false)

  return (
    <div>
      <Header />
      <Calendar onEventAdded={onEventAdded}/>
      <EventForm onEventAdded={onEventAdded} setOnEventAdded={setOnEventAdded}/>
      <TaskList />
    </div>
  );
}

export default Dashboard;