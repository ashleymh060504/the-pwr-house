import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const TaskForm = ({ onTaskAdded, setOnTaskAdded }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Work");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!name || !category || !dueDate) {
      setError('Please fill in all required fields.');
      return;
    }

        const newTask = { name, category, details, dueDate };
        
        console.log(newTask)
      
        const res = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(newTask),
      });

      if (res.ok) {
        const savedTask = await res.json();
        setOnTaskAdded(!onTaskAdded)
        setName(""); setCategory(""); setDetails(""); setDueDate("");
      }
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 border rounded">
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Form.Group className="mb-3">
        <Form.Label>Task Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
          <select className= "form-select form-select-sm" aria-label="Small select example" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option selected>Select Category</option>
            <option value="Work">Work</option>
            <option value="Home">Home</option>
          </select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Details</Form.Label>
        <Form.Control
          as="textarea"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </Form>
  );
};

export default TaskForm;