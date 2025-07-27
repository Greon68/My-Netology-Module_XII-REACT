import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ComponentC } from "./ComponentC";
import { CtxData } from "../../context/AuthContext.js";

export const ComponentB = () => {
  const { profile } = useContext<CtxData>(AuthContext);

  return (
    <div className="ctx-component">
      <div>Component B</div>
      <div>Profile name: {profile.name}</div>
      {/* <ComponentC /> */}
    </div>
  );
};
