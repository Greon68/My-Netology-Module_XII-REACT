import { IAccount } from "../models";

interface InlineCardProps {
  accounts: IAccount[];
}

export const InlineCard = ({ accounts }: InlineCardProps) => {
  return (
    <ul className="inline-card">
      {accounts.map((account) => (
        <li key={account.id}>
          Cardholder: {account.name} Balance: {account.balance}
        </li>
      ))}
    </ul>
  );
};
