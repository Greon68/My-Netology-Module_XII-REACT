
// const Card = ({ accounts }) => {
//   return (
//     <div className="card-items">
//       {accounts.map((account) => (
//         <p className="card-item" key={account.id}>
//           Cardholder: {account.name} Balance: {account.balance}
//         </p>
//       ))}
//     </div>
//   );
// };

const Card = ({ list }) => {
  return (
    <div className="card-items">
      {list.map((el) => (
        <p className="card-item" key={el.id}>
          Cardholder: {el.name} Balance: {el.balance}
        </p>
      ))}
    </div>
  );
};


export default Card