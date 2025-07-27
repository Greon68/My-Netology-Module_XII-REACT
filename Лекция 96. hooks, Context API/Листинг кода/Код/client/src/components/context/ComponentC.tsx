import { AuthContext } from "../../context/AuthContext.js";

export const ComponentC = () => {
  return (
    <AuthContext.Consumer>
      {({ token, setToken }) => (
        <div className="ctx-component">
          ComponentC
          <pre>token: {JSON.stringify(token)}</pre>
          <button onClick={() => setToken(`new-token-${Math.random()}`)}>
            Change token value
          </button>
        </div>
      )}
    </AuthContext.Consumer>
  );
};
