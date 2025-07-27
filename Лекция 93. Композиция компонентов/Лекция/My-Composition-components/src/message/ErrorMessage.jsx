import { Message } from "./Message";

const ErrorMessage = ({ children }) => {
  return <Message type="error">{children}</Message>;
};

export default ErrorMessage