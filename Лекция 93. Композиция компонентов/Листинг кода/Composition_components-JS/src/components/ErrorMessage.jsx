import { Message } from "./Message";

import { MessageProps } from "./Message";

export const ErrorMessage = (props) => {
  return <Message {...props} type="error" />;
};
