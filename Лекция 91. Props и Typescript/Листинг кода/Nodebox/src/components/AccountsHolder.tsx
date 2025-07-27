import React, { useState } from 'react'

import { IAccount } from "../models"


interface AccountsHolderProps {
  render: (accounts: IAccount[]) => React.ReactNode;
}

export const AccountsHolder = ({ render }: AccountsHolderProps) => {
  const [ accounts ] = useState<IAccount[]>([
    { id: 1, name: "**** *464", balance: 10000 },
    { id: 2, name: "**** *567", balance: 25000 },
  ]);

  return <>{render(accounts)}</>;
};