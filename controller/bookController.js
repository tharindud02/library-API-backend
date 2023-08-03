const Book = require("../models/Book");

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("author");
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getBookById = async (req, res) => {
  const bookId = req.params.id;

  try {
    const book = await Book.findById(bookId).populate("author");
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createBook = async (req, res) => {
  const { name, isbn, author } = req.body;

  try {
    const book = new Book({ name, isbn, author });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};
