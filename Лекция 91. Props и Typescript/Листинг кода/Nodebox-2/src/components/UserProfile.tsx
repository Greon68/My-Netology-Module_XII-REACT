import { IUser } from "../models";

interface UserProfileProps {
  user: IUser;
}

export const UserProfile = ({ user }: UserProfileProps) => {
  const { name, avatar, status } = user;

  return (
    <article>
      <img src={avatar} alt={`${name} avatar`} />
      <h2>{name}</h2>
      <h3>{status}</h3>
    </article>
  );
};
