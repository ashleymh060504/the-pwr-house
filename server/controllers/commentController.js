import Comment from "../models/Comment.js";
import Post from "../models/Post.js";
import mongoose from "mongoose";

// Create a new comment on a post
export const addComment = async (req, res) => {
  try {
    const { postId, content } = req.body;

    if (!req.body.postId) {
      return res.status(400).json({ message: "postId is required" });
  }

    if (!content) {
      return res.status(400).json({ message: "Comment text is required." });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }

    const newComment = new Comment({
      postId,
      userId: req.user.id,
      content
    });
    await newComment.save();

    if (!post.comments) {
      post.comments = [];
    }

    post.comments.push(newComment._id); // Add comment to post's comments array
    await post.save();

    res.status(201).json(newComment);
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Server error." });
  }
};

export const getCommentsByPost = async (req, res) => {
  try {
    console.log("Received postId:", req.params.postId);
    const postId = new mongoose.Types.ObjectId(req.params.postId);

    const comments = await Comment.find({ postId }).populate("userId", "firstName lastName"); // Populate user details
    console.log("Comments found:", comments);
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error retrieving comments:", error);
    res.status(500).json({ message: "Server error." });
  }
};


export const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found." });
    }

    if (comment.userId.toString() !== req.user.id.toString()) {
      return res.status(403).json({ message: "Unauthorized to delete this comment." });
    }

    await comment.deleteOne();

    res.status(200).json({ message: "Comment deleted successfully." });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ message: "Server error." });
  }
};
