import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import TaskForm from './TaskForm';

const TaskList = ({ onTaskAdded }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => { 
    const fetchTasks = async () => {
      try {
      const res = await fetch("/api/tasks", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch tasks");
      }
      const data = await res.json();
      setTasks(data.map(task => ({ name: task.name, category: task.category, details: task.details, dueDate: task.dueDate, _id: task._id })));
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };
   
    fetchTasks();
  }, [onTaskAdded]);

  // const handleTaskAdded = (newTask) => {
  //   setTasks([...tasks, newTask]);
  // };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Tasks</h2>
      
    <Table striped bordered hover className="mt-4">
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Category</th>
          <th>Details</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task._id}>
            <td>{task.name}</td>
            <td>{task.category}</td>
            <td>{task.details}</td>
            <td>{new Date(task.dueDate).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    {/* <TaskForm onTaskAdded={handleTaskAdded} /> */}

  </Container>
  );
};

export default TaskList;
