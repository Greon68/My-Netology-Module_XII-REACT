import { useState, useMemo, useCallback } from "react";

import { List } from "./List";



export const MemoExample = () => {
  const [value, setValue] = useState(1);

  const items = [
    {
      id: 1,
      value: "Item 1",
    },
    {
      id: 2,
      value: "Item 2",
    },
    {
      id: 3,
      value: "Item 3",
    },
  ];

  const handleClick = () => {
    setValue((prev) => prev + 1);
  };

  console.log("MemoExample renders");

  return (
    <div className="App">
      <List items={items} handleClick={handleClick} />

      <button onClick={() => setValue((prev) => prev + 1)}>
        Count {value}
      </button>
    </div>
  );
};
