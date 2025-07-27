import { useContext } from "react";

import { AuthContext, CtxData } from "../../context/AuthContext";
import { ComponentB } from "./ComponentB";

export const ComponentA = () => {
  const { token, setToken } = useContext<CtxData>(AuthContext);

  return (
    <div className="ctx-component">
      ComponentA
      <pre>token: {JSON.stringify(token)}</pre>
      <button onClick={() => setToken(`new-token-${Math.random()}`)}>
        Change token value
      </button>
      {/* <ComponentB /> */}
    </div>
  );
};
