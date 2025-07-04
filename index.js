// IMPORTS
require(`dotenv`).config();

const express = require("express");
const moviesRouter = require("./routers/router.js");

const { notFound } = require("./middlewares/notFound.js");
const { handlerError } = require("./middlewares/handlerError.js");

// CONFIG
const app = express();
const cors = require("cors");
const { APP_URL, APP_PORT } = process.env;
const host = `${APP_URL}:${APP_PORT}`;

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(
  cors({
    origin: `http://localhost:5173`,
  })
);

// ROUTERS

app.use("/movies", moviesRouter);

// ERRORS MIDDLEWARE
app.use(notFound);
app.use(handlerError);

// LISTEN

app.listen(APP_PORT, () => {
  console.log(`Server in ascolto su ${host}`);
});
