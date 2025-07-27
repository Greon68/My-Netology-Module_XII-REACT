import React from "react";

// ФИНИШ :
// export const withData = (endpoint, dataToState) => (Component) => {
//   return class extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {};
//     }

//     fetchData() {
//       if (typeof endpoint === "function") {
//         endpoint = endpoint(this.props);
//       }

//       fetch(endpoint)
//         .then((result) => result.json())
//         .then((data) => this.setState(dataToState(data)));
//     }

//     componentDidMount() {
//       this.fetchData(this.props);
//     }

//     componentDidUpdate(prevProps, prevState) {
//       if (this.props.endpoint !== prevProps.endpoint) {
//         this.fetchData(this.props);
//       }
//     }

//     render() {
//       console.log(this.props);
//       return <Component {...this.props} {...this.state} />;
//     }
//   };
// };

// **********************************************************

// export function withData (Component,endpoint, propsName){
//   return class extends React.Component {
//     state = {};

//     componentDidMount() {
//       if (typeof endpoint === "function") {
//         endpoint = endpoint(this.props);
//       }

//       fetch(endpoint)
//         .then((result) => result.json())
//         .then((data) => {
//           console.log ('data - ',data);
//           console.log ('propsName - ',propsName);
//           this.setState({ [propsName]: data })});
//     }

//     componentDidUpdate(prevProps, prevState) {
//       if (this.props.endpoint !== prevProps.endpoint) {
//         this.fetchData(this.props);
//       }
//     }

//     render() {
//       console.log('this.props - ',this.props);
//       console.log('this.state - ',this.state);
//       return <Component {...this.props} {...this.state} />;
//     }
//   };
// };

// *******************
// 5. Заменяем имя  propName на функцию :

// export function withData( Component, endpoint, dataToState ) {
//   return class extends React.Component {
//     state = {};

//     componentDidMount() {
//       if (typeof endpoint === "function") {
//         endpoint = endpoint(this.props);
//       }

//       fetch(endpoint)
//         .then(result => result.json())
//         .then(data => this.setState(dataToState(data) ));
//       }

//     render() {
      
//       return <Component {...this.props} {...this.state}/>;
//     }
//   };
// }
// ************************************

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

// Для максимальной универсальности лучше
// использовать подход, когда HOC принимает только один аргумент
// — компонент, который можно улучшить.
// Но как быть, если нам нужны дополнительные аргументы ?
// Использовать функцию высшего порядка:
// const OrderList = withData('/api/orders', 'orders')(OrderListView);

// Непонятно? Давайте перепишем, чтобы выглядело попроще
// const upgrade = withData('/api/orders', 'orders');
// const OrderList = upgrade(OrderListView);



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
export const withData = (endpoint, dataToState) => Component => class extends React.Component {

  fetchData(props) {
    if (typeof endpoint === 'function') {
      endpoint = endpoint(this.props);
    }
    fetch(endpoint)
      .then(result => result.json())
      .then(data => this.setState( dataToState(data) ));
  }
  componentDidMount() { this.fetchData(this.props); }

  componentDidUpdate(prevProps, prevState) {
  if (this.props !== prevProps) { this.fetchData(this.props);}
  }

  render() { return <Component {...this.props} {...this.state} />; }
};