const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/routes");

// Environmemnt Variables
require("dotenv").config();

// DB Connection
const db = require("./db.connection");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
