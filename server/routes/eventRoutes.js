import express from "express";
import { createEvent, getUserEvents, deleteEvent, updateEvent } from "../controllers/eventController.js";
import { verifyToken } from "../middleware/auth.js"; 

const router = express.Router();

router.post("/", verifyToken, createEvent);
router.get("/", verifyToken, getUserEvents);
router.delete("/:id", verifyToken, deleteEvent);
router.put("/:id", verifyToken, updateEvent);

export default router;
