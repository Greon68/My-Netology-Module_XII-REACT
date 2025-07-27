import React from "react";

interface ModalProps {
  children?: React.ReactNode;
}
export const Modal = ({ children }: ModalProps) => {
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
