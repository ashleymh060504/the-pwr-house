import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const PostForm = ({ token, onPostAdded }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ content }),
    });
    setContent("");
    onPostAdded();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        as="textarea"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <Button type="submit" className="mt-2">
        Post
      </Button>
    </Form>
  );
};

export default PostForm;
