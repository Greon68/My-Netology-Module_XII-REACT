import { withDataFC } from "./withDataFC.jsx";
import { UsersListView } from "./UsersListView.jsx";

export const UsersList = withDataFC(
  "https://jsonplaceholder.typicode.com/users/",
  (users) => ({ users })
)(UsersListView);

// ++++++++++++++++++++++++++++++++++++++++++++++

// const url = "https://jsonplaceholder.typicode.com/users/";

// export const UsersList = withDataFC(url, (users) => ({ users }))(UsersListView);

// ***********************************************************
// const upgrade = withDataFC(
//   "https://jsonplaceholder.typicode.com/users/",
//   (users) => ({ users })
// );

// export const UsersList = upgrade(UsersListView);


  

