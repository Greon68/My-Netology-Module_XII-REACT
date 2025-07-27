// import { useState } from "react";
// import { AuthContext } from "./context/AuthContext";

import {
  Effects,
  LatestNews,
  LatestNews2,
  LatestNews3,
} from "./components/hooks";

import "./styles.css";

export default function App() {
  /* context example */
  // const [token, setToken] = useState<string>("");
  // const profile = { name: "User" };

  return <div className="App">{/* <Effects /> */}</div>;
  /* context example */
  // return (
  //   <AuthContext.Provider value={{ token, setToken, profile }}>
  //     <ComponentA />
  //     <ComponentB />
  //     <ComponentC />
  //   </AuthContext.Provider>
  // );
}
