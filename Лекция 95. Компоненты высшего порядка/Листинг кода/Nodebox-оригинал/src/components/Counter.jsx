export const Counter = ({ value, decOne, addOne }) => {
  return (
    <div className="counter">
      <button onClick={decOne}>DEC</button>
      <span>{value}</span>
      <button onClick={addOne}>ADD</button>
    </div>
  );
};
