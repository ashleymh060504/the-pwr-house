import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Modal, Button, Form } from "react-bootstrap";
import "../styles/index.css";

const Calendar = ({onEventAdded}) => {
  const [events, setEvents] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [displayedEvent, setDisplayedEvent] = useState({});
  const [eventTitle, setEventTitle] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [eventDescription, setEventDescription] = useState ("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
  
        if (!res.ok) {
          throw new Error("Failed to fetch events");
        }
  
        const data = await res.json();
  
        setEvents(
          data.map((event) => ({
            id: event._id, // Ensure each event has an ID
            title: event.title,
            start: event.start,
            end: event.end || event.start, // Prevent undefined end dates
            extendedProps: {
              category: event.category || "Uncategorized",
              description: event.description || "No description",
            },
          }))
        );
        
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
  
    fetchEvents();
  }, [onEventAdded]);
  

  const handleEventClick = (info) => {
    console.log("Clicked event: ", info.event);
  
    setDisplayedEvent({
      id: info.event.id,
      title: info.event.title,
      start: info.event.start ? info.event.start.toISOString().slice(0, 16) : "",
      end: info.event.end ? info.event.end.toISOString().slice(0, 16) : "",
      category: info.event.extendedProps?.category || "",
      description: info.event.extendedProps?.description || "",
    });
  
    setEventTitle(info.event.title);
    setEventStart(info.event.start ? info.event.start.toISOString().slice(0, 16) : "");
    setEventEnd(info.event.end ? info.event.end.toISOString().slice(0, 16) : "");
    setEventCategory(info.event.extendedProps?.category || "");
    setEventDescription(info.event.extendedProps?.description || "");
    setModalShow(true);
  };
  

  const handleUpdateEvent = async () => {
    if (!displayedEvent.id) {
      console.error("No event ID found");
      return;
    }
  
    const updatedEvent = {
      title: eventTitle,
      start: eventStart,
      end: eventEnd,
      category: eventCategory,
      description: eventDescription,
    };
  
    try {
      const res = await fetch(`/api/events/${displayedEvent.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(updatedEvent),
      });
  
      if (!res.ok) {
        throw new Error("Failed to update event");
      }
  
      const updatedData = await res.json();
  
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === displayedEvent.id ? { ...event, ...updatedData } : event
        )
      );
  
      setModalShow(false);
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };
  
    

  const handleClose = () => {
    setModalShow(false);
    setDisplayedEvent(null);
  };
  

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
      />
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View/Edit Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEventTitle">
              <Form.Label>Event Title</Form.Label>
              <Form.Control type="text" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} />
              <Form.Label>Start Date/Time</Form.Label>
              <Form.Control type="datetime-local" value={eventStart} onChange={(e) => setEventStart(e.target.value)} />
              <Form.Label>End Date/Time</Form.Label>
              <Form.Control type="datetime-local" value={eventEnd} onChange={(e) => setEventEnd(e.target.value)} />
              <Form.Label>Category</Form.Label>
              <select className= "form-select form-select-sm" aria-label="Small select example" value={eventCategory} onChange={(e) => setEventCategory(e.target.value)}>
                <option value="work">Work</option>
                <option value="home">Home</option>
              </select>
              <Form.Label>Event Description</Form.Label>
              <Form.Control type="text" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateEvent}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>

  );
};

export default Calendar;
