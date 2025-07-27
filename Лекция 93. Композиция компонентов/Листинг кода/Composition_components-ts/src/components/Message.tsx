import React from "react";

export interface MessageProps {
  title: string;
  info: string;
  type?: string;
  handler: () => void;
}

export const Message: React.FC<MessageProps> = (props) => {
  const { title, info, type = "info", handler } = props;

  return (
    <div className={`message message-${type}`} onClick={handler}>
      <h4>{title}</h4>
      <p>{info}</p>
    </div>
  );
};
