// export const List =({people})=> {
//     const listItems = people.map(person =>
//       <li>{person.name}:{person.profession}</li>
//     );
//     return <ul>{listItems}</ul>;
//   }

import { people } from './data.js';
import { getImageUrl } from './utils.js';

export  function List() {
    // const chemists = people.filter(person =>
    //   person.profession === 'chemist'
    // );

    // Без фильтра
    const chemists = people;
    const listItems = chemists.map(person =>
      <li key={person.id}>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        {/* <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
    */}
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
  
      </li>
    );

    return <ul>{listItems}</ul>;
  }