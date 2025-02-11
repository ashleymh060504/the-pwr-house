import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    //Telling Mongoose to use the new URL string parser that is part of the MongoDB Node.js driver. This new parser is designed to handle a wider variety of connection string formats and is more aligned with the MongoDB driver's expectations. As MongoDB evolves, using the new parser ensures that your application is compatible with future changes in how MongoDB handles connection strings. 
    useUnifiedTopology: true,
    //Also opting into the new connection management engine introduced in the MongoDB driver. This unified topology provides a more consistent and efficient way to manage connections.
});

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("The PWR House API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));