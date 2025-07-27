// const express = require("express");
// const { v4 } = require("uuid");
// const { range } = require("ramda");
// const cors = require("cors");
// const { faker } = require("@faker-js/faker");

// Лекция - ФИНИШ

// const app = express();
// app.use(cors());
// const port = 3333;

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const getFakeNewsUpdate = () => {
//   const count = Math.round(Math.random() * 10);

//   return range(0, count + 1)
//     .map(() => ({
//       id: v4(),
//       text: faker.lorem.paragraph(),
//       date: faker.date.recent(),
//     }))
//     .sort((i1, i2) => (i1.date > i2.date ? 1 : 0));
//  };

// let delayResponse = false;
// app.get("/news", async (req, res) => {
//   if (delayResponse) {
//     await delay(7000);
//   }

//   delayResponse = !delayResponse;
//   res.send(getFakeNewsUpdate());
// });

// app.listen(port, () => {
//   console.log(`Сервер запущен на порт ${port}`);
// });

// ************************************************
// Из презентации - работает :

// const express = require('express');
// const cors = require('cors');
// const { faker } = require("@faker-js/faker");
// const {v4: uuidv4} = require('uuid');
// const { range } = require("ramda");

// const app = express();
// app.use(cors());

// const getNewNews = () => {
//   // Исходный вариант:
// // return [{id: uuidv4(), content: faker.lorem.sentence()}];
// // Вариант из лекции:
//   const count = Math.round(Math.random()*10);
//     return range(0, count + 1)
//       .map(() => ({
//         id:  uuidv4(),
//         text: faker.lorem.paragraph(),
//         date: faker.date.recent(),
//     }))
//     .sort((i1, i2) => (i1.date > i2.date ? 1 : 0));

// };

// app.get('/news/latest', (reg, res) => {
//   res.json(getNewNews());
// });
// // app.listen(7070);

// const port = 7070;
// app.listen(port, () => {
//   console.log(`Сервер запущен на порт ${port}`);
// });

// *****************************************
// Лекция - начало :
const express = require("express");
const { v4 } = require("uuid");
const { range } = require("ramda");
const { faker } = require("@faker-js/faker");
const cors = require("cors");

// const app = express();
// app.use(cors());
// const port = 3333;

// const getFakeNewsUpdate = ()=>{
//   // количество новостей:
//   const count = Math.round(Math.random()*10);

// //   // return range(0, count + 1).map (() => ({
// //   //   id: v4(),
// //   //   text: faker.lorem.paragraph(),
// //   // }));
// //   // ++++++++++++++++++++++++

//     return range(0, count + 1)
//     .map(() => ({
//       id: v4(),
//       text: faker.lorem.paragraph(),
//       date: faker.date.recent(),
//     }))
//     .sort((i1, i2) => (i1.date > i2.date ? 1 : 0));
// };

// app.get("/news", (req,res) => {
//   res.send(getFakeNewsUpdate())
// });

// app.listen (port , ()=>{
//   console.log (`Сервер запущен на порт ${port}`)
// });

// сервер  с задержкой отправки данных :
const app = express();
app.use(cors());
const port = 3333;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getFakeNewsUpdate = () => {
  const count = Math.round(Math.random() * 10);

  return range(0, count + 1)
    .map(() => ({
      id: v4(),
      text: faker.lorem.paragraph(),
      date: faker.date.recent(),
    }))
    .sort((i1, i2) => (i1.date > i2.date ? 1 : 0));
};

let delayResponse = false;
app.get("/news", async (req, res) => {
  if (delayResponse) {
    await delay(7000);
  }

  delayResponse = !delayResponse;
  res.send(getFakeNewsUpdate());
});

app.listen(port, () => {
  console.log(`Сервер подключён к порту ${port}`);
});
