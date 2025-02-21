import Task from '../models/Task.js';

// Create a new task
export const createTask = async (req, res) => {
  try {
    const { name, category, details, dueDate } = req.body;
    const newTask = new Task({ 
      user: req.user.id, 
      name, category, details, dueDate 
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Error creating task' });
  }
};

// Get all tasks for a user sorted by due date
export const getUserTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userID: req.user.id }).sort({ dueDate: 1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error });
  }
};

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: "Error deleting event", error });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, category, details, dueDate } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { name, category, details, dueDate },
            { new: true }
        );
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: "Error updating event", error });
    }
};