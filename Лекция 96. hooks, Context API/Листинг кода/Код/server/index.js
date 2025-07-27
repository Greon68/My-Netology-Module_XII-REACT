const express = require("express");
const cors = require("cors");
const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");

const getNewNews = () => {
  return [
    { id: uuidv4(), content: faker.lorem.sentence() },
    { id: uuidv4(), content: faker.lorem.sentence() },
    { id: uuidv4(), content: faker.lorem.sentence() },
    { id: uuidv4(), content: faker.lorem.sentence() },
    { id: uuidv4(), content: faker.lorem.sentence() }
  ];
};

const app = express();

app.use(cors());

app.get("/news/latest", (reg, res) => {
  res.json(getNewNews());
});

app.listen(7070);
