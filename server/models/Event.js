import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
        title: { type: String, required: true },  
        description: { type: String },  
        start: { type: String, required: true }, 
        end: { type: String, required: true }, 
        category: { type: String, enum: ["Work", "Home"], required: true },  
    }, 
    { timestamps: true });

export default mongoose.model("Event", EventSchema);
