import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  try {
    const { title, description, start, end, category } = req.body;
    const newEvent = new Event({
      userId: req.user.id, // Extracted from JWT token
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
};

export const getUserEvents = async (req, res) => {
  try {
    const events = await Event.find({ userId: req.user.id });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving events", error });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting event", error });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, start, end, category } = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      { title, description, start, end, category },
      { new: true }
    );
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: "Error updating event", error });
  }
};
