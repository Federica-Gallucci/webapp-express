// IMPORTS
require(`dotenv`).config();

const express = require("express");
const app = express();
const { notFound } = require("./middlewares/notFound.js");
const { handlerError } = require("./middlewares/handlerError.js");

// CONFIG
const { APP_URL, APP_PORT } = process.env;
const host = `${APP_URL}:${APP_PORT}`;

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());

// ERRORS MIDDLEWARE
app.use(notFound);
app.use(handlerError);

// ROUTES
const connection = require("./db/conn.js");

app.get("/", (req, res) => {
  connection.query("SELECT * FROM movies ");
  res.json(`Benvenuto sul backand`);
});

// LISTEN

app.listen(APP_PORT, () => {
  console.log(`Serve in ascolto su ${host}`);
});
