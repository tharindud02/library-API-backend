const express = require("express");
const authorController = require("../controller/authorController");
const bookController = require("../controller/bookController");

const router = express.Router();

// Authors
router.get("/authors", authorController.getAuthors);
router.get("/author/:id", authorController.getAuthorById);
router.post("/author", authorController.createAuthor);
router.put("/author/:id", authorController.updateAuthor);
router.delete("/author/:id", authorController.deleteAuthor);

// Books
router.get("/books", bookController.getBooks);
router.get("/book/:id", bookController.getBookById);
router.post("/book", bookController.createBook);
router.put("/book/:id", bookController.updateBook);
router.delete("/book/:id", bookController.deleteBook);

module.exports = router;
