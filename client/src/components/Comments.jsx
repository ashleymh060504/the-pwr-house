import React, { useState, useEffect } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";

const Comments = ({ postId, token }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Fetch comments when component mounts or postId changes
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comments/${postId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch comments.");
        }

        const data = await res.json();
       setComments(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    if (postId) {
      fetchComments();
    }
  }, [postId, token]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ 
          postId: postId._id,
          content: newComment 
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to add comment.");
      }

      const addedComment = await res.json();
      setComments([...comments, addedComment]); // Update UI immediately
      setNewComment(""); // Clear input field
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  // Handle deleting a comment
  const handleDeleteComment = async (commentId) => {
    try {
      const res = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error("Failed to delete comment.");
      }

      setComments(comments.filter((comment) => comment._id !== commentId)); // Remove from UI
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div className="mt-3">
      <h5>Comments</h5>
      <ListGroup>
        {comments.map((comment) => (
          <ListGroup.Item key={comment._id} className="d-flex justify-content-between align-items-center">
            <span>{comment.text}</span>
            <Button variant="danger" size="sm" onClick={() => handleDeleteComment(comment._id)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Form onSubmit={handleAddComment} className="mt-3">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-2">
          Add Comment
        </Button>
      </Form>
    </div>
  );
};

export default Comments;
