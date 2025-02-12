import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("http://localhost:3000/api/events", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await res.json();
      setEvents(data.map(event => ({ title: event.title, start: event.start, end: event.end })));
    };

    fetchEvents();
  }, []);

  return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />;
};

export default Calendar;
