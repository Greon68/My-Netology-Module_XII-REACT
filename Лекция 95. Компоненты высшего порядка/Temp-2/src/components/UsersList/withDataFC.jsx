import React, { useState, useEffect } from "react";

// export const withDataFC = (endpoint, dataToState) => (Component) => {

//   return (props) => {
//     const [state, setState] = useState([]);

//     const fetchData = () => {
//       if (typeof endpoint === "function") {
//         endpoint = endpoint(props);
//       }

//       fetch(endpoint)
//         .then((result) => result.json())
//         .then((data) => setState(dataToState(data)));
//     };

//     useEffect(() => {
//       fetchData(endpoint);
//     }, [endpoint]);

//     return <Component {...props} {...state} />;
//   };
// };

// *************************************************
// export const UsersList = withDataFC(
//   "https://jsonplaceholder.typicode.com/users/",
//   (users) => ({ users })
// )(UsersListView);

// *********************************************
//  Лекция. Создаём НОС

// 1. создали шаблон
// HOC — это функция, которая должна создать и вернуть компонент
// function withData() {
//   return class extends React.Component {
//   };
// }

// 2.Добавили компонент
// Следующий шаг — обернуть компонент, не забыв прокинуть атрибуты

// function withDataFC(Component) {
//   return class extends React.Component {
//     render() {
//       return <Component {...this.props} />;
//     }
//   };
// }


// 3.Добавили fetch-запрос
// Добавим хук componentDidMount, в котором получим данные из API

// export function withDataFC(Component) {
//   return class extends React.Component {
//     state = {};

//     componentDidMount() {
//       fetch(`https://jsonplaceholder.typicode.com/users/`)
//       .then(result => result.json())
//       .then((users) => this.setState({users}));
//       }

//     render() {
//       return <Component {...this.props} users={this.state.users}/>;
//     }
//   };
// }



// 4.Задаём подачу url и имени свойства через входные параметры 

// export function withDataFC(Component, endpoint, propName) {
//   return class extends React.Component {
//     state = {};

//     componentDidMount() {
//       fetch(endpoint)
//         .then(result => result.json())
//         .then(data => this.setState({[propName]:data }));
//       }

//     render() {      
//       return <Component {...this.props} {...this.state}/>;
//     }
//   };
// }

// 5. Заменяем имя  propName на функцию :

// export function withDataFC( Component, endpoint, dataToState ) {
//   return class extends React.Component {
//     state = {};

//     componentDidMount() {
//       fetch(endpoint)
//       .then(result => result.json())
//       .then(data => this.setState( dataToState(data) ));
//     }

//     render() {
      
//       return <Component {...this.props} {...this.state}/>;
//     }
//   };
// }

// 6. Выносим получение данных и обновление состояния в отдельный метод
// 7. Вызываем метод fetchData в componentDidMount, передаём туда текущие атрибуты
// 8. Вызываем метод fetchData в componentDidUpdate, передаём следующие атрибуты

// export function withDataFC( Component, endpoint, dataToState ) {
//   return class extends React.Component {
//     state = {};

//     // 6.
//     fetchData(props) {
//       if (typeof endpoint === 'function') {
//         endpoint = endpoint(this.props);
//       }
//       fetch(endpoint)
//         .then(result => result.json())
//         .then(data => this.setState(dataToState(data))        
//       );
//     }

//     7.
//     componentDidMount() {
//       this.fetchData(this.props);
//     }
    
//     8.
//     componentDidUpdate(prevProps, prevState) {
//       if (this.props.endpoint !== prevProps.endpoint) {
//         this.fetchData(this.props);
//       }
//     }

//     render() {
      
//       return <Component {...this.props} {...this.state}/>;
//     }
//   };
// }

// Пошаговое улучшение:
// 1.  withData принимает два аргумента и возвращает функцию

// function withData(endpoint, dataToState) {
//   return function () {};
// }

// 2. Эта функция должна принимать компонент, создавать новый компонент и возвращать его:

// function withData(endpoint, dataToState) {
//   return function (Component) {
//     return class extends React.Component {/* … */};
//   };
// }

// 3. Заменим функцию на стрелочную функцию, чтобы сократить вложенность
// function withData(endpoint, dataToState) {
//   return Component => class extends React.Component {
//   //...
//   };
// }

// 4.Можно и саму функцию withData заменить на стрелочную
// export const withDataFC = (endpoint, dataToState) => Component => class extends React.Component {

//   fetchData(props) {
//     if (typeof endpoint === 'function') {
//       endpoint = endpoint(this.props);
//     }
//     fetch(endpoint)
//       .then(result => result.json())
//       .then(data => this.setState( dataToState(data) ));
//   }
//   componentDidMount() { this.fetchData(this.props); }

//   componentDidUpdate(prevProps, prevState) {
//   if (this.props !== prevProps) { this.fetchData(this.props);}
//   }

//   render() { return <Component {...this.props} {...this.state} />; }
// };

// Вариант через useEffect :
export const withDataFC = (endpoint, dataToState) => (Component) => {

  return (props) => {
    const [state, setState] = useState([]);

    const fetchData = () => {
      if (typeof endpoint === "function") {
        endpoint = endpoint(props);
      }

      fetch(endpoint)
        .then((result) => result.json())
        .then((data) => setState(dataToState(data)));
    };

    useEffect(() => {
        fetchData(endpoint);
      }, [endpoint]);

    return <Component {...props} {...state} />;
  };
};