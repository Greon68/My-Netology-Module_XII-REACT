export const UserView = (props) => {
  return (
    <div>
      <h1>{props.user?.name}</h1>
      <p>{props.user?.email}</p>
    </div>
  );
};
