export const LikeButton = () => {
  const handleAddLike = (e) => {
    console.log(e);
  };

  return <button onClick={handleAddLike}>Add like</button>;
};
