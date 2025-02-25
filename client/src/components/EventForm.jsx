import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const EventForm = ({ onEventAdded, setOnEventAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [category, setCategory] = useState("Work");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newEvent = { title, description, start, end, category };

    console.log(newEvent)

    const res = await fetch("http://localhost:3000/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newEvent),
    });

    if (res.ok) {
      const savedEvent = await res.json();
      setOnEventAdded(!onEventAdded)
      setTitle(""); setDescription(""); setStart(""); setEnd(""); setCategory("");
    }
  };

  return (

  <Form onSubmit={handleSubmit} className="p-4 border rounded">
      
      <Form.Group className="mb-3">
        <Form.Label>Event Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Start Date/Time</Form.Label>
        <Form.Control
          type="datetime-local"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>End Date/Time</Form.Label>
        <Form.Control
          type="datetime-local"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Label>Category</Form.Label>
      <select className= "form-select form-select-sm" aria-label="Small select example" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option selected>Select Category</option>
        <option value="Work">Work</option>
        <option value="Home">Home</option>
      </select>

      <Form.Group className="mb-3">
        <Form.Label>Event Description</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Event
      </Button>
    </Form>
  );
};

export default EventForm;
