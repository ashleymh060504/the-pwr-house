import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1]; // Get token from request header

    if (!token) {
      return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.user = verified; // Attach user data to request object
    next(); // Proceed to next middleware or route handler
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token." });
  }
};
