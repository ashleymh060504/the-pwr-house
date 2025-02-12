import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/events.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/events", eventRoutes);

mongoose.connect(process.env.MONGO_URI);

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("The PWR House API is running...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));