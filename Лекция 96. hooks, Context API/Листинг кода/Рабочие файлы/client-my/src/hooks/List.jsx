import { memo, useMemo } from "react";
// import { IListItem } from "./MemoExample";



export const List = ({ items, handleClick }) => {
  console.log("List renders");

  const listItems = () => {
    console.log("listItems renders");

    return items.map(({ id, value }) => (
      <li key={id} onClick={() => handleClick()}>
        {value}
      </li>
    ));
  };

  return <ul>{listItems()}</ul>;
};
