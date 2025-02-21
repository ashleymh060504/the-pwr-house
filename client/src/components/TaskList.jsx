import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import TaskForm from './TaskForm';

const TaskList = ({ token }) => {
  const [tasks, setTasks] = useState([]);

  
    const fetchTasks = async () => {
      const response = await fetch('/api/tasks', {
        headers: { Authorization: token }
      });

      const data = await response.json();
      setTasks(data);
    };
  useEffect(() => {  
    fetchTasks();
  }, [token]);

  const handleTaskAdded = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Task Manager</h2>
      <TaskForm token={token} onTaskAdded={handleTaskAdded} />

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
  </Container>
  );
};

export default TaskList;
