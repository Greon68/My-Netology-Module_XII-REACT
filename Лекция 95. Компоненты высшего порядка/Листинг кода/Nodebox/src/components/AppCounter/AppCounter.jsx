import { useState } from "react";

import { Counter } from "./Counter.jsx";

import { withLogger } from "./withLogger.jsx";

export const AppCounter = () => {
  const [value, setValue] = useState(0);

  const LoggedCounter = withLogger(Counter);

  return (
    <>
      {/* <Counter
        value={value}
        addOne={() => setValue((prev) => prev + 1)}
        decOne={() => setValue((prev) => prev - 1)}
      /> */}
      <LoggedCounter
        value={value}
        addOne={() => setValue((prev) => prev + 1)}
        decOne={() => setValue((prev) => prev - 1)}
      />
    </>
  );
};
