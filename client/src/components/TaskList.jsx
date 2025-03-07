import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';

const TaskList = ({ onTaskAdded }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState(new Set());

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
      console.log("Fetched Tasks from backend:", data);

      setTasks(data.map(task => ({ 
        name: task.name,
        category: task.category,
        details: task.details,
        dueDate: task.dueDate,
        _id: task._id
      })));
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };
   
    fetchTasks();
  }, [onTaskAdded]);

  const handleCheckboxChange = (taskId) => {
    setSelectedTasks(prevSelectedTasks => {
    const newSelectedTasks = new Set(prevSelectedTasks);
    if (newSelectedTasks.has(taskId)) {
      newSelectedTasks.delete(taskId);
    } else {
      newSelectedTasks.add(taskId);
    }
    return newSelectedTasks;
  });
};

  const handleDelete = async () => {
    const tasksToDelete = Array.from(selectedTasks);
    const token = localStorage.getItem("token");
    try {
      await Promise.all(tasksToDelete.map(taskId => {
        fetch(`/api/tasks/${taskId}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(tasks.filter(task => !tasksToDelete.includes(task._id)));
        setSelectedTasks(new Set());
      }));
    } catch (error) {
      console.error("Failed to delete tasks:", error);
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">To Do</h2>
      
    <Table striped bordered hover className="mt-4">
      <thead>
        <tr>
          <th></th>
          <th>Task</th>
          <th>Category</th>
          <th>Details</th>
          <th style={{ minWidth: "150px"}}>Due Date</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task._id}>
            <td>
              <input
                type="checkbox"
                style={{color: "white"}}
                onChange={() => handleCheckboxChange(task._id)}
                checked={selectedTasks.has(task._id)}
              />
            </td>
            <td>{task.name}</td>
            <td>{task.category}</td>
            <td>{task.details}</td>
            <td>{task.dueDate ? new Date(task.dueDate).toISOString().split("T")[0] : "No due date"}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="5" className="text-center">
          <button onClick={handleDelete} style={{backgroundColor:"#2c3e50", borderColor: "#2c3e50"}} className="btn btn-danger">Delete Completed Tasks</button>
          </td>
        </tr>
      </tfoot>
    </Table>
  </Container>
  );
};

export default TaskList;
