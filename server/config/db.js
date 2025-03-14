import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected.');
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Database connection failed:');
  }
};

export default db;
