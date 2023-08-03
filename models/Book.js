const mongoose = require("mongoose");
const schemaNames = require("../config/schemaNames");

const bookSchema = new mongoose.Schema({
  name: String,
  isbn: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: schemaNames.AUTHOR },
});

const Book = mongoose.model(schemaNames.BOOK, bookSchema);

module.exports = Book;
