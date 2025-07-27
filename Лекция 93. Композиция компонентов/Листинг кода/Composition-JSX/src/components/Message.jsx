import React from "react";


export const Message = (props) => {
  const { title, info, type = "info", handler } = props;

  return (
    <div className={`message message-${type}`} onClick={handler}>
      <h4>{title}</h4>
      <p>{info}</p>
    </div>
  );
};
