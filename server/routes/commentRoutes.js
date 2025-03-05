import express from "express";
import { addComment, getCommentsByPost, deleteComment } from "../controllers/commentController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addComment);
router.get("/:postId", getCommentsByPost);
router.delete("/:commentId", verifyToken, deleteComment);

export default router;
