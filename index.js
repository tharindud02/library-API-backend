const express = require("express");
const bodyParser = require("body-parser");

// Environmemnt Variables
require("dotenv").config();

// DB Connection
const db = require("./db.connection");

const app = express();

app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
