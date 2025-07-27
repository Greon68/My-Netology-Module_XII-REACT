import { useState } from "react";

import { PurchaseItem } from "./PurchaseItem.tsx";

import { PurchaseModel } from "../models/purchaseModel.tsx";

export const PurchaseList = () => {
  const [items, setItems] = useState<PurchaseModel[]>([
    { id: 1, name: "Pizza", done: false },
    { id: 2, name: "Juice", done: false },
    { id: 3, name: "Milk", done: false },
    { id: 4, name: "Ice cream", done: false },
    { id: 5, name: "Bread", done: false }
  ]);

  const handleRemove = (id: number) =>
    setItems((prev) => prev.filter((item) => item.id !== id));
  const handleCheck = (id: number) =>
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        }

        return item;
      })
    );

  return (
    <ul>
      {items.map((item) => (
        <PurchaseItem
          key={item.id}
          item={item}
          remove={handleRemove}
          check={handleCheck}
        />
      ))}
    </ul>
  );
};
