export const UserView = (props) => {
  console.log ('UserView-props- ',props)
  return (
    <div>
      <h3>{props.user?.name}</h3>
      <p>{props.user?.email}</p>
    </div>
  );
};
