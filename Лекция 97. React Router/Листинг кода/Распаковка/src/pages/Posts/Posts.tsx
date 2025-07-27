import { useState, useEffect, Suspense } from "react";

import "./posts.scss";
import { Link, useLoaderData, Await } from "react-router-dom";
import { IPost } from "../../models";

export const Posts = () => {
  // const [posts, setPosts] = useState<IPost[]>([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  //     .then((response) => response.json())
  //     .then((posts) => setPosts(posts));
  // }, []);

  const { posts } = useLoaderData() as { posts: Promise<IPost[]> };

  return (
    <div className="posts">
      <h1>Posts page</h1>
      <ul className="posts__item">
        <Suspense fallback={<p>Loading...</p>}>
          <Await resolve={posts}>
            {(_posts: IPost[]) => (
              <>
                {_posts.map((post) => (
                  <li className="posts__item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                  </li>
                ))}
              </>
            )}
          </Await>
        </Suspense>
        {/* {posts.map((post) => (
          <li className="posts__item" key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
};
