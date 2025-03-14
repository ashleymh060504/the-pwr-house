import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import db from "./config/db.js";

dotenv.config();
db();

const app = express();


app.use(express.json());
app.use(cors());

app.use("/api/events", eventRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("./client/dist"));
    app.get("*", (req, res) => {
        res.sendFile("index.html", { root: "./client/dist" });
    });
}
    

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));