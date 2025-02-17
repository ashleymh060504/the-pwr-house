import Calendar from "../components/Calendar";
import React from "react";
import Header from "../components/Header";
import EventForm from "../components/EventForm";
import Tasks from "../components/Tasks";

function Dashboard() {
  return (
    <div>
      <Header />
      <Calendar />
      <EventForm />
      <Tasks />
    </div>
  );
}

export default Dashboard;