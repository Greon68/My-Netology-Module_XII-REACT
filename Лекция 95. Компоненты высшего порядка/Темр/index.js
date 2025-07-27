'use strict';
// console.log('hello')

// ФУНКЦИИ ВЫСШЕГО ПОРЯДКА

function mul(a, b) {
    return a * b;
}

function add(a, b) {
    return a + b;
}

function div(a, b) {
    return a / b;
}

function sub(a, b) {
    return a - b;
}

// console.log("mul(2,3) - ", mul(2,3))

// console.log (add(1, 2) === 3);// true
// console.log (mul(10, 4) === 40);//true
// console.log (div(10, 5) === 2);// true
// console.log (add("1", 2) === 3);// false ("1" + 2 == "12")

// console.log (add(1, 2), typeof(add(1, 2)));
// console.log (add("1", 2), typeof(add("1", 2)));

function isNumber(value) {
    return typeof value === "number";
}

// function mul(a, b) {
//     if (!isNumber(a) || !isNumber(b)) {
//     throw new Error("Оба аргумента должны быть числами.");
//     }
//     return a * b;
// }

// console.log (mul(10, 4));
// console.log (mul(10, '4'));

function printToLog(operation, firstValue, secondValue) {
    console.log(operation, firstValue, secondValue);
}

// function mul(a, b) {
//     printToLog('умножение', a, b);
//     if (!isNumber(a) || !isNumber(b)) {
//     throw new Error("Оба аргумента должны быть числами.");
//     }
//     return a * b;
// }

// console.log (mul(10, 4));
// console.log (mul(10, '4'));

// ФУНКЦИЯ ВЫСШЕГО ПОРЯДКА
function operationExecutor(a, b, operation) {
    if (!isNumber(a) || !isNumber(b)) {
    throw new Error("Оба аргумента должны быть числами.");
    }
    return operation(a, b);
}

// console.log (operationExecutor(3, 5, add));// 8
// console.log (operationExecutor(3, 5, mul));// 15
// console.log ( operationExecutor('3', 5, add));// Error ...

// *****************************************************************

function withValidator(isValid, operation) {
    return function (...args) {
        if (!args.every(isValid)) {
            throw new Error("Передан некорректный аргумент");
        }
        return operation.apply(this, args);
    };
}

// Мы не вызываем функцию operation в теле withValidator. Мы создаём
// функцию, которая будет её вызывать при определённых условиях.
// Поэтому мы говорим «оборачиваем»
// console.log ('withValidator(): ', withValidator)

const numberAdd = withValidator(isNumber, add);
const numberMul = withValidator(isNumber, mul);

// console.log ('numberAdd = withValidator(isNumber, add): ', numberAdd); 
// console.log ('numberAdd(): ', numberAdd); 
// console.log('isNumber(): ', isNumber);
// console.log('add(): ', add)

// Вызов функции add() , аргументы которой проверяет функция isNumber()
// через экземпляр функции withValidator() с заданными аргументами:
// console.log ("numberAdd(6, 1): ", numberAdd(6, 1)); // 7
// console.log (numberMul(4, 3));// 12
// console.log (numberAdd('3', 5));// Error: Передан некорректный аргумент

// ************************************************
// Добавим возможность логирования в функции
function withLogger(tag, operation) {
    return function (...args) {
        console.log(tag, ...args);
        return operation.apply(this, args);
    };
}

// console.log('Функция withLogger(): ', withLogger );

// const loggedNumberAdd = withLogger('сумма', numberAdd);

// // console.log('loggedNumberAdd = withLogger("сумма", numberAdd)');
// // console.log('Вызываем loggedNumberAdd(10, 2): ');

// loggedNumberAdd(10, 2);// сумма 10 2

// const loggedNumberSum = withLogger(
//     'сумма',
//     withValidator(isNumber, add)
// );

// loggedNumberSum (5, 15); // сумма 5 15

// const summ = loggedNumberSum (5, 15);

// console.log(summ); // 20

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// УЧЕБНИК

// MAP 
let map = new Map();

map.set("1", "str1");    // строка в качестве ключа
map.set(1, "num1");      // цифра как ключ
map.set(true, "bool1");  // булево значение как ключ

// помните, обычный объект Object приводит ключи к строкам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
// console.log(map.get(1)); // "num1"
// console.log(map.get("1")); // "str1"
// console.log(map.size); // 3
// console.log(map);

// ******************************************

// function slow(x) {
//     // здесь могут быть ресурсоёмкие вычисления
//     console.log(`Called with ${x}`);
//     return x;
//   }
  
//   function cachingDecorator(func) {
//     let cache = new Map();
  
//     return function(x) {
//       if (cache.has(x)) {    // если кеш содержит такой x,
//         console.log('cache 1 -',  cache)
//         return cache.get(x); // читаем из него результат

//       }  
//     //   let result = func(x); // иначе, вызываем функцию
//       let result = func.call(this, x);
  
//       cache.set(x, result); // и кешируем (запоминаем) результат
//       console.log('cache 2 -',  cache)
//       return result;
//     };    
//   }
  
//   slow = cachingDecorator(slow);
  
//   console.log( 'slow(1) - ', slow(1) ); // slow(1) кешируем
//   console.log( "Again 'из кеша ' (1): " + slow(1) ); // возвращаем из кеша
  
//   console.log('slow(2) - ', slow(2) ); // slow(2) кешируем
//   console.log( "Again 'из кеша ' (2): " + slow(2) ); // возвращаем из кеша

//   **********************************************

// сделаем worker.slow кеширующим
// let worker = {
//     someMethod() {
//       return 2;
//     },
  
//     slow(x) {
//       // здесь может быть страшно тяжёлая задача для процессора
//       console.log("Called with " + x);
//       return x * this.someMethod(); // (*)
//     }
//   };

//   // тот же код, что и выше
// function cachingDecorator(func) {
//     let cache = new Map();

//     return function(x) {

//       if (cache.has(x)) {
//         return cache.get(x);
//       }

//       let result = func(x); // (**)

//       cache.set(x, result);
//       return result;
//     };
//   }
  
//   console.log('Без кеширования worker.slow(1) -', worker.slow(1) ); // оригинальный метод работает
  
//   worker.slow = cachingDecorator(worker.slow); // теперь сделаем его кеширующим
  
//   console.log('С кешированием worker.slow(2) -', worker.slow(2) ); // Ой! Ошибка:

// *******************************

function sayHi() {
    console.log( this.name );
    // console.log( `sayHi.call ${this} -`, this.name);
  }
  
//   let user = { name: "John" };
//   let admin = { name: "Admin" };
  
  // используем 'call' для передачи различных объектов в качестве 'this'
//   sayHi.call( user ); // John
//   sayHi.call( admin ); // Admin

// ***************************
// С Аргументами 

// function say(phrase) {
//     console.log (this.name + ': ' + phrase);
//   }
  
//   let user = { name: "John" };
  
//   // 'user' становится 'this', и "Hello" становится первым аргументом
// //   say.call( user, "Hello" ); // John: Hello

// //  **************************************************
// // В нашем случае мы можем использовать call в обёртке
// //  для передачи контекста в исходную функцию:

// let worker = {
//     someMethod() {
//       return 2;
//     },
  
//     slow(x) {
//       // .... сложные вычисления
//       console.log("Called with " + x);
//       return x * this.someMethod(); // (*)
//     }
//   };
  
//   function cachingDecorator(func) {
//     let cache = new Map();
//     return function(x) {
//       if (cache.has(x)) {
//         return cache.get(x);
//       }

//       let result = func.call(this, x); // теперь 'this' передаётся правильно
//     //   let result = worker.slow.call(this, 2);

//       cache.set(x, result);
//       return result;
//     };
//   }
  
//   worker.slow = cachingDecorator(worker.slow); // теперь сделаем её кеширующей
  
//   console.log( worker.slow(2) ); // работает
//   console.log( worker.slow(2) ); // работает, не вызывая первоначальную функцию (кешируется)

//   Чтобы всё было понятно, давайте посмотрим глубже, как передаётся this:

//   После декорации worker.slow становится обёрткой function (x) { ... }.
//   Так что при выполнении worker.slow(2) обёртка получает 2 в качестве аргумента
//  и this=worker (так как это объект перед точкой).
//   Внутри обёртки, если результат ещё не кеширован, func.call(this, x) 
// передаёт текущий this (=worker) и текущий аргумент (=2) в оригинальную функцию.

// ************************************

let worker = {
    slow(min, max) {
        console.log(`Called with ${min},${max}`);
      return min + max;
    }
  };
  
  function cachingDecorator(func, hash) {
    let cache = new Map();
    return function() {
      let key = hash(arguments); // (*)
      console.log ('key-', key);
      console.log ('type key - ' , typeof(key))

      if (cache.has(key)) {
        return cache.get(key);
      }
  
    //   let result = func.call(this, ...arguments); // (**)
    //   console.log ( " Use to call")
      let result = func.apply(this, arguments); 
        console.log ( " Use to apply")
  
      cache.set(key, result);
      return result;
    };
  }
  
  function hash(args) {
    return args[0] + ',' + args[1];
  }
  
  worker.slow = cachingDecorator(worker.slow, hash);
  
//   console.log(' worker.slow(3, 5) -', worker.slow(3, 5) ); // работает
//   console.log( "Again (кэш) " + worker.slow(3, 5) ); // аналогично (из кеша)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// Fetch

const endpoint = "https://jsonplaceholder.typicode.com/users/"

const jsonList =  fetch(endpoint)
    // console.log(jsonList) // Promise {<pending>}
    // .then(result => console.log('result-' , result)) //result- Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/users/', redirected: false, status: 200, ok: true, …}
    .then( (result) => result.json())
    // console.log('result.json -', result.json()) // ReferenceError: result is not defined
    .then( (users) => { 
      console.log(users);
       console.log(users[0].name)
  })





// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//   .then(response => response.json())
//   .then(commits => console.log(commits[0].author.login));

// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//   .then(response => response.json())
//   .then(commits => console.log(commits));

