

export const PurchaseItem = ({ item, remove, check }) => {
  console.log(item.done);

  return (
    <li className="purchase-item">
      <span
        style={{ textDecoration: `${item.done ? "line-through" : "none"}` }}
      >
        {item.name}
      </span>
      <div>
        <button onClick={() => check(item.id)}>
          {item.done ? "Uncheck" : "Check"}
        </button>
        <button onClick={() => remove(item.id)}>Remove</button>
      </div>
    </li>
  );
};
