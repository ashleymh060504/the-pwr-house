import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { createPost, getPosts, deletePost } from "../controllers/postController.js";

const router = express.Router();

router.post("/", verifyToken, createPost);
router.get("/", verifyToken, getPosts);
router.delete("/:id", verifyToken, deletePost);

export default router;
