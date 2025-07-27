

 const InlineCard = ({ list }) => {
  return (
    <ul className="inline-card">
      {list.map((el) => (
        <li key={el.id}>
          Cardholder: {el.name} Balance: {el.balance}
        </li>
      ))}
    </ul>
  );
};
export default InlineCard