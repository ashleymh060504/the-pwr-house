import Comments from "./Comments";

const Post = ({ post, token }) => {
  return (
    <div className="post-card">
      <h4>{post.title}</h4>
      <p>{post.content}</p>

      {/* Include the Comments component, passing the postId and token */}
      <Comments postId={post._id} token={token} />
    </div>
  );
};

export default Post;