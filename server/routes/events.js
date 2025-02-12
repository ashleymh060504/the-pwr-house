import express from "express";
import Event from "../models/Event.js";
import { verifyToken } from "../middleware/auth.js";  // Ensures only logged-in users can save events

const router = express.Router();

// Create a new event
router.post("/", verifyToken, async (req, res) => {
  try {
    const { title, description, start, end, category } = req.body;
    const newEvent = new Event({
      userId: req.user.id, // Comes from JWT token
      title,
      description,
      start,
      end,
      category,
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: "Error saving event", error });
  }
});

export default router;
