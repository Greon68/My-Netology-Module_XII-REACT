import React from "react";

export const UsersListView = (props) => {
  const { users } = props

  return (
    <ul>
      {users?.map(({id, name}) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};
