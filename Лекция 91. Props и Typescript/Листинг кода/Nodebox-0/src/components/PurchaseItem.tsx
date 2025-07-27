import { PurchaseModel } from "../models/purchaseModel";

interface PurchaseItemProps {
  item: PurchaseModel;
  remove: (id: number) => void;
  check: (id: number) => void;
}

export const PurchaseItem = ({ item, remove, check }: PurchaseItemProps) => {
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
