import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Post from "./Post";

const PostList = ({ token }) => {
  const [posts, setPosts] = useState([]);

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
        setPosts(data.map(post => ({ content: post.content, user: post.userId, _id: post._id })));
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
         <Post key={post._id} post={post} token={token} />
      ))}
      {posts.map((post) => (
        <div key={post._id} className="p-3 border mb-3">
          <h5>{post.user.name}</h5>
          <p>{post.content}</p>
          {post.user._id === localStorage.getItem("userId") && (
            <Button variant="danger" onClick={() => handleDelete(post._id)}>
              Delete
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
