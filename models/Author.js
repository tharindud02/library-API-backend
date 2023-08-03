const mongoose = require("mongoose");
const schemaNames = require("../config/schemaNames");

const authorSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
});

const Author = mongoose.model(schemaNames.AUTHOR, authorSchema);

module.exports = Author;
