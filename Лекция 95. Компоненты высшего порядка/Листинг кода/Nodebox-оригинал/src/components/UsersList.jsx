import { withDataFC } from "./withDataFC.jsx";
import { UsersListView } from "./UsersListView.jsx";

export const UsersList = withDataFC(
  "https://jsonplaceholder.typicode.com/users/",
  (users) => ({ users })
)(UsersListView);
