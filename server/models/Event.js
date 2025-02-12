import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Links event to a user
        title: { type: String, required: true },  // Event title (e.g., "Team Meeting")
        description: { type: String },  // Optional event details
        start: { type: Date, required: true },  // Event start time
        end: { type: Date, required: true },  // Event end time
        category: { type: String, enum: ["Work", "Home"], required: true },  // Helps separate work & home tasks
    }, 
    { timestamps: true });

export default mongoose.model("Event", EventSchema);
