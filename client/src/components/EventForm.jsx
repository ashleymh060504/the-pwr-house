import { useState } from "react";

const EventForm = ({ onEventAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [category, setCategory] = useState("Work");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newEvent = { title, description, start, end, category };

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
      onEventAdded(savedEvent); // Refresh calendar after adding
      setTitle(""); setDescription(""); setStart(""); setEnd("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="datetime-local" value={start} onChange={(e) => setStart(e.target.value)} required />
      <input type="datetime-local" value={end} onChange={(e) => setEnd(e.target.value)} required />
      <select className= "form-select form-select-sm" aria-label="Small select example" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option selected>Select Category</option>
        <option value="Work">Work</option>
        <option value="Home">Home</option>
      </select>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
