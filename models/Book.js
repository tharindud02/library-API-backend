const mongoose = require("mongoose");
const schemaNames = require("../config/schemaNames");

const bookSchema = new mongoose.Schema({
  name: String,
  isbn: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (isbn) {
        // Validate 13-digit ISBN
        return /^(?=(?:\D*\d){13}\D*$)[\0-9-]+$/.test(isbn);
      },
      message: (props) => `${props.value} is not a valid 13-digit ISBN`,
    },
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: schemaNames.AUTHOR,
  },
});

const Book = mongoose.model(schemaNames.BOOK, bookSchema);

module.exports = Book;
