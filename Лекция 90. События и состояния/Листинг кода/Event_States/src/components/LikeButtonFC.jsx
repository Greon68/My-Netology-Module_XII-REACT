import { useState } from "react";

export const LikeButtonFC = () => {
  const initialState = { post: 1, likes: 0 };
  const [state, setState] = useState(initialState);

  const handleAddLike = () => {
    setState({
      // ...state,
      likes: state.likes + 1,
      // post: state.post + 10
    });
    console.log(state);
  };

  return (
    <>
      <h2>Post: {state.post}</h2>
      <button onClick={handleAddLike}>FC:Likes {state.likes}</button>
    </>
  );
};
