import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

export const verifyToken = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
  try {
    token = req.headers.authorization.split(" ")[1]; // Get token from request header
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.user = await User.findById(decoded.id).select("-password");
    next();
   } catch (error) {
    res.status(401).json({ message: "Invalid or expired token." });
  }
  } else {
    res.status(401).json({ message: "Access Denied. No token provided." });
  }
};
