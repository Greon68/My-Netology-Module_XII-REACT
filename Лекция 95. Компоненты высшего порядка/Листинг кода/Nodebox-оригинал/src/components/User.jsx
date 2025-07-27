import { withData } from "./withData.jsx";
import { UserView } from "./UserView.jsx";

export const User = withData(
  ({ id }) => `https://jsonplaceholder.typicode.com/users/${id}`,
  (user) => ({ user })
)(UserView);
