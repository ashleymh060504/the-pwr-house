import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/events.js";

dotenv.config();

const app = express();

app.use(express.static("./client/dist"));
app.use(express.json());
app.use(cors());

app.use("/api/events", eventRoutes);

mongoose.connect(process.env.MONGO_URI);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
//     res.send("The PWR House API is running...");
    res.sendFile("./client/dist/index.html", { root: "./" });
});
    

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));