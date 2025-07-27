import { useEffect, useState } from "react";

export const Effects = () => {
  const [count, setCount] = useState(1);

  console.log("render", { count });

  useEffect(() => {
    console.log("effect", { count });

    if (count === 0) setCount(1);

    return () => {
      console.log("cleanup effect", { count });
    };
  }, [count]);

  const handleIncCount = () => setCount((p) => p + 1);
  const handleDecCount = () => setCount((p) => p - 1);

  // for (let i = 0; i < 100000000; i++) { }

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={handleDecCount}>-</button>
      <button onClick={handleIncCount}>+</button>
    </div>
  );
};
