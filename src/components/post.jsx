import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Post = ({ id }) => {
  const [post, setPost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const resp = await fetch(
        `https://sample-blog-api.nyamage.workers.dev/api/posts/${id}`
      );
      const postResp = await resp.json();
      setPost(postResp);
    };
    getPost();
  }, [id]);
  if (!Object.keys(post).length) return <div />;
  return (
    <div>
      {" "}
      <h1>{post.title}</h1> <p>{post.text}</p>{" "}
      <p>
        {" "}
        <em>Published {new Date(post.published_at).toLocaleString()}</em>{" "}
      </p>{" "}
      <p>
        {" "}
        <Link to="/">Go back</Link>{" "}
      </p>{" "}
    </div>
  );
};

export default Post;
