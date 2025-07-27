

const UserProfile = ({ user }) => {
  const { name, avatar, status } = user;

  return (
    <article>
      <img src={avatar} alt={`${name} avatar`} />
      <h2>{name}</h2>
      <h4>{status}</h4>
    </article>
  );
};

export default UserProfile
