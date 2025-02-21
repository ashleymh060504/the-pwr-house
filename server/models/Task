import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ["Work", "Home"], required: true },
  details: { type: String },
  dueDate: { type: Date, required: true },
});

export default mongoose.model("Task", TaskSchema);
