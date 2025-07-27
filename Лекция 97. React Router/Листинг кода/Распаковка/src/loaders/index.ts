import { LoaderFunction, defer } from "react-router-dom";

const getPosts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  return res.json();
};

export const postsLoader: LoaderFunction = async () => {
  return defer({
    posts: getPosts(),
  });
};

export const postLoader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return post;
};
