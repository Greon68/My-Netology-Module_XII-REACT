import "./addPost.scss";

export const AddPost = () => {
  return (
    <div className="add-post">
      <h1>Add post Page</h1>
      <input type="text" placeholder="Enter post title" />
      <textarea />
      <button>Add post</button>
    </div>
  );
};
