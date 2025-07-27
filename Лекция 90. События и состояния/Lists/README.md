Рендеринг данных из массивов 
Допустим, у вас есть список контента.

<ul>
  <li>Creola Katherine Johnson: mathematician</li>
  <li>Mario José Molina-Pasquel Henríquez: chemist</li>
  <li>Mohammad Abdus Salam: physicist</li>
  <li>Percy Lavon Julian: chemist</li>
  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
</ul>
Единственное различие между этими элементами списка — их содержимое, их данные. При создании интерфейсов вам часто потребуется отображать несколько экземпляров одного и того же компонента с разными данными: от списков комментариев до галерей изображений профилей. В таких ситуациях вы можете хранить эти данные в объектах и массивах JavaScript и использовать такие методы, как map() и filter() для отображения списков компонентов.

Вот краткий пример того, как создать список элементов из массива:

Переместите данные в массив:
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
Преобразуйте элементы people в новый массив узлов JSX, listItems:

const listItems = people.map(person => <li>{person}</li>);

Возврат listItems из вашего компонента, заключенного в <ul>:

return <ul>{listItems}</ul>;