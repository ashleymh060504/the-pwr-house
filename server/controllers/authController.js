import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const newUser = new User({ firstName, lastName, email, password: hashedPassword });
    await newUser.save();

    // Generate JWT
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(201).json({ token, user: { id: newUser._id, firstName, lastName, email } });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user existence
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({ token, user: { id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error logging in", error });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  }
  catch (error) {
    res.status(500).json({ message: "Error getting users", error });
  }
};