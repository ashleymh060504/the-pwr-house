import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../styles/index.css";

const Calendar = ({onEventAdded}) => {
  const [events, setEvents] = useState([]);
  const [displayedEvent, setDisplayedEvent] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("/api/events", {
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
      <div style={{borderStyle: "groove", marginBottom: "40px"}} className="container" id="staticBackdrop" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel" style={{fontWeight: "bold"}}>Event Title: {displayedEvent?.title}</h1>
            </div>
            <div className="modal-body">
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
