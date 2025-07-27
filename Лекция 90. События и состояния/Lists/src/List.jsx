// export  function List({}) {
//     const listItems = people.map(person =>
//       <li>{person}</li>
//     );
//     return <ul>{listItems}</ul>;
//   }

  export const List =({people})=> {
    const listItems = people.map(person =>
      <li>{person}</li>
    );
    return <ul>{listItems}</ul>;
  }




