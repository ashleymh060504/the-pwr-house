import Calendar from "../components/Calendar";
import React, { useState } from "react";
import Header from "../components/Header";
import EventForm from "../components/EventForm";
// import Tasks from "../components/Tasks";

function Dashboard() {
  const [onEventAdded, setOnEventAdded] = useState(false)

  return (
    <div>
      <Header />
      <Calendar onEventAdded={onEventAdded}/>
      <EventForm onEventAdded={onEventAdded} setOnEventAdded={setOnEventAdded}/>
      {/* <Tasks /> */}
    </div>
  );
}

export default Dashboard;