import React from "react";

export const UsersListView = (props) => {

  console.log ('UsersListView-props', props )
  const { users } = props

  return (
    <ul>
      {users?.map(({id, name}) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};
