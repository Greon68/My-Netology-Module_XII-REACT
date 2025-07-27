import React from "react";


export const Modal = ({ children }) => {
  // const ctx = React.Children.map(children, (c) => <div>{c}</div>);

  return (
    <div className="modal">
      <div className="overlay" />
      <div className="content">
        {/* {ctx} */}
        {children}
      </div>
    </div>
  );
};
