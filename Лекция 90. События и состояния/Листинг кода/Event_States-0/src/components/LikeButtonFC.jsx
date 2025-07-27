import { useState } from "react";

export const LikeButtonFC = () => {
  const initialState = { post: 1, likes: 0 };
  const [state, setState] = useState(initialState);

  const handleAddLike = () => {
    setState({
      ...state,
      likes: state.likes + 1
    });
    console.log(state);
  };

  return (
    <>
      <h1>Post: {state.post}</h1>
      <button onClick={handleAddLike}>Likes {state.likes}</button>
    </>
  );
};
