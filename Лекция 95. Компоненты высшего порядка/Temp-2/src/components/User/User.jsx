import { withData } from "./withData.jsx";
import { UserView } from "./UserView.jsx";
import React, { useState, useEffect } from "react";

// export const User = withData(
//   ({ id }) => `https://jsonplaceholder.typicode.com/users/${id}`,
//   (user) => ({ user })
// )(UserView);


// const upgrade = withData(
//   ({ id }) => `https://jsonplaceholder.typicode.com/users/${id}`,
//   (user) => ({ user })
// );
// export const User = upgrade(UserView);

// ***************************
// Лекция

// Начальная заготовка :
// export class User extends React.Component {
//   state = { user: {} };

//   componentDidMount() {
//     const {id}= this.props;
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then(result => result.json())
//       .then(user => this.setState({user}));
//     }

//   render() {
//     const {user} = this.state;
//     return <UserView user={user}/>
//   }
// }

// ++++++++++++++++++++++++++++++++++++++++++
// export const User = withData(
//   UserView,
//   // Вместо того, чтобы передавать URL в HOC, передадим функцию,
// // которая получит атрибуты, создаст и вернёт URL
//   ({id}) => `https://jsonplaceholder.typicode.com/users/${id}`,
//   'user',
// )

// +++++++++++++++++++++++++++++++++++++
// export const User = withData(
//   UserView,
//   ({id}) => `https://jsonplaceholder.typicode.com/users/${id}`,
//   (user) => ({user})
// )

// ++++++++++++++++++++++++++++++++++++++++++
export const User = withData(
  ({ id }) => `https://jsonplaceholder.typicode.com/users/${id}`,
  (user) => ({ user })
)(UserView);




