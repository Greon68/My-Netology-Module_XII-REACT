import { useEffect, useState } from "react";

export const Effects = () => {
  const [count, setCount] = useState(1);

  console.log("render", { count });

  useEffect(() => {
    console.log("effect", { count });

    if (count === 0) setCount(1);

    return () => {
      console.log("cleanup effect", { count });
      console.log("************************************");
    };
  }, [count]);

  const handleIncCount = () => setCount((prev) => prev + 1);
  const handleDecCount = () => setCount((prev) => prev - 1);

  return (
    <div className="App">
      <h2>Count: {count}</h2>
      <button onClick={handleDecCount}>-</button>
      <button onClick={handleIncCount}>+</button>
    </div>
  );
};
