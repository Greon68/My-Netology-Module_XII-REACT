import React, { useState } from 'react'

const AccountsHolder = ({ render }) => {
  const [ accounts ] = useState([
    { id: 1, name: "**** *464", balance: 10000 },
    { id: 2, name: "**** *567", balance: 25000 },
  ]);

  return <>{render(accounts)}</>;
};

export default AccountsHolder