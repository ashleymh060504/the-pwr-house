import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    category: { type: String, enum: ["Work", "Home"], required: true },
    details: { type: String },
    dueDate: { type: Date, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
