import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ message: "Post content is required." });
    }

    const newPost = new Post({ 
        userId: req.user.id, content });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Server error while creating post." });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("userId", "firstName lastName")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Server error while fetching posts." });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findById(id);

    if (post.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized to delete this post." });
    }

    await post.deleteOne();
    res.json({ message: "Post deleted successfully." });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ message: "Server error while deleting post." });
  }
};
