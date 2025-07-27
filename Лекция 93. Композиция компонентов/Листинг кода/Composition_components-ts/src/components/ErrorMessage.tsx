import { Message } from "./Message";

import { MessageProps } from "./Message";

export const ErrorMessage = (props: MessageProps) => {
  return <Message {...props} type="error" />;
};
