import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar = ({onEventAdded}) => {
  const [events, setEvents] = useState([]);
  const [displayedEvent, setDisplayedEvent] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("http://localhost:3000/api/events", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await res.json();
      setEvents(data.map(event => ({ title: event.title, start: event.start, end: event.end })));
    };

    fetchEvents();
  }, [onEventAdded]);

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={function (info) {
          info.jsEvent.preventDefault(); // don't let the browser navigate
          console.log(info)
          setDisplayedEvent(info.event);
        }
        }
      />
      <div class="container" id="staticBackdrop" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel" style={{fontWeight: "bold"}}>Event Title: {displayedEvent?.title}</h1>
            </div>
            <div class="modal-body">
              <p>Start: {displayedEvent?.start?.toLocaleString()}</p>
              <p>End: {displayedEvent?.end?.toLocaleString()}</p>
              {/* <p>Category: {displayedEvent?.category}</p> */}
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Calendar;
