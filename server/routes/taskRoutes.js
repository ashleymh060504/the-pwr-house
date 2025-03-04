import express from "express";
import { createTask, getUserTasks, deleteTask, updateTask } from "../controllers/taskController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createTask);
router.get("/", verifyToken, getUserTasks);
router.delete("/:id", verifyToken, deleteTask);
router.put("/:id", verifyToken, updateTask);

export default router;
