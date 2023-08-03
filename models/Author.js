const mongoose = require("mongoose");
const schemaNames = require("../config/schemaNames");

const authorSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
});

const Author = mongoose.model(schemaNames.AUTHOR, authorSchema);

module.exports = Author;
