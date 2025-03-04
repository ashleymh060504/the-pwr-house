import express from "express";
import { createEvent, getUserEvents, deleteEvent, updateEvent } from "../controllers/eventController.js";
import { verifyToken } from "../middleware/auth.js"; 

const router = express.Router();

router.route("/").post(verifyToken, createEvent).get(verifyToken, getUserEvents);
router.route("/:id").delete(verifyToken, deleteEvent).put(verifyToken, updateEvent);

export default router;
