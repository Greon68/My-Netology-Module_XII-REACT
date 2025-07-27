import { useEffect, useState } from "react";
import { IPost } from "../../models";
import { useParams, useNavigate, useLoaderData } from "react-router-dom";

export const Post = () => {
  // const [post, setPost] = useState<IPost | null>(null);
  // const { id } = useParams();
  const navigate = useNavigate();
  const post = useLoaderData() as IPost;

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then((response) => response.json())
  //     .then((post) => setPost(post));
  // }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="post">
      <button className="btn" onClick={handleGoBack}>
        Go back
      </button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};
