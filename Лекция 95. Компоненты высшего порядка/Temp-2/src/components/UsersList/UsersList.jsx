import React, { useState, useEffect } from "react";
import { withDataFC } from "./withDataFC.jsx";
import { UsersListView } from "./UsersListView.jsx";

// ************************************************
// Начальная заготовка :
// export class UsersList extends React.Component {
//   state = { users: [] };

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users/")
//     .then(result => result.json())
//     .then(users => this.setState({users}));
//   }

//   render() {
//     const {users} = this.state;
//     return <UsersListView users={users}/>
//   }
// }

// ++++++++++++++++++++++++++++++++++++++



// export const UsersList = withDataFC(UsersListView)

// export const UsersList = withDataFC(
//   UsersListView,
//   "https://jsonplaceholder.typicode.com/users/",
//   'users'
// );

// export const UsersList = withDataFC(
//   UsersListView,
//   "https://jsonplaceholder.typicode.com/users/",
//   (users) => ({users})
// );

export const UsersList = withDataFC(
  "https://jsonplaceholder.typicode.com/users/",
  (users) => ({ users })
)(UsersListView);

// ++++++++++++++++++++++++++++++++++++++++++++++

// const url = "https://jsonplaceholder.typicode.com/users/";

// // export const UsersList = withDataFC(url, (users) => ({ users }))(UsersListView);

// // ***********************************************************
// const upgrade = withDataFC(
//   // "https://jsonplaceholder.typicode.com/users/",
//   url ,
//   (users) => ({ users })
// );

// export const UsersList = upgrade(UsersListView);


  

