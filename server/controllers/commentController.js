import Comment from "../models/Comment.js";
import Post from "../models/Post.js";

// Create a new comment on a post
export const addComment = async (req, res) => {
  try {
    const { postId, content } = req.body;

    if (!content) {
      return res.status(400).json({ message: "Comment text is required." });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }

    const newComment = new Comment({
      content,
      userId: req.user.id, // Extracted from JWT
      post: postId,
    });

    await newComment.save();

    post.comments.push(comment._id); // Add comment to post's comments array
    await post.save();

    res.status(201).json(comment);
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Server error." });
  }
};

// Get all comments for a specific post
export const getCommentsByPost = async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = await Comment.find({ post: postId }).populate("userId", "firstName lastName"); // Populate user details

    res.status(200).json(comments);
  } catch (error) {
    console.error("Error retrieving comments:", error);
    res.status(500).json({ message: "Server error." });
  }
};

// Delete a comment (only the comment owner can delete)
export const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found." });
    }

    if (comment.userID.toString() !== req.user.id.toString()) {
      return res.status(403).json({ message: "Unauthorized to delete this comment." });
    }

    await comment.deleteOne();

    res.status(200).json({ message: "Comment deleted successfully." });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ message: "Server error." });
  }
};
