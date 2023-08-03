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
    if (error.name === "ValidationError") {
      // Handle Mongoose validation errors
      const validationErrors = {};
      for (const key in error.errors) {
        validationErrors[key] = error.errors[key].message;
      }
      res.status(400).json({ errors: validationErrors });
    } else if (error.message) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

exports.updateBook = async (req, res) => {
  const bookId = req.params.id;
  const { name, isbn, author } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      { name, isbn, author },
      { new: true }
    ).populate("author");

    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteBook = async (req, res) => {
  const bookId = req.params.id;

  try {
    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
