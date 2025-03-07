import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";
import Comments from "./Comments";

const PostList = ({ token }) => {
  const [posts, setPosts] = useState([]);
  const currentUser = jwtDecode(token);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts", {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        if (!res.ok) {
          throw new Error("Failed to fetch posts.");
        }
  
        const data = await res.json();
        const mappedData = data.map(post => ({ content: post.content, user: post.userId, _id: post._id }))
        setPosts(mappedData);
        console.log(mappedData)
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
  
    fetchPosts();
  }, [token]);
  
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (!res.ok) {
        throw new Error("Failed to delete post.");
      }
  
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} className="p-3 border mb-3">
          <h8 style={{color: "#b0c4b1"}}>-{post.user.firstName}</h8>
          <p>{post.content}</p>

          <div id={`comments-${post._id}`} style={{display: "none"}}>
            <Comments postId={post._id} token={token} />
            <hr />
          </div>

          <Button variant="primary" style={{ color: "#4a5759", backgroundColor: "#b0c4b1" }} onClick={() => {
            const targetDiv = document.getElementById(`comments-${post._id}`);
            targetDiv.style.display = targetDiv.style.display === "none" ? "block" : "none";
          }}>
              Comments
            </Button>
          {post.user._id === currentUser.id && (
            <Button variant="danger" style={{ color: "#4a5759", backgroundColor: "#f7e1d7" }} onClick={() => handleDelete(post._id)}>
              Delete
            </Button>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PostList;
