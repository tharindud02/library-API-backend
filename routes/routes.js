const express = require("express");
const authorController = require("../controller/authorController");
const bookController = require("../controller/bookController");

const router = express.Router();

// Authors
router.get("/authors", authorController.getAuthors);
router.get("/author/:id", authorController.getAuthorById);
router.post("/author", authorController.createAuthor);

// Books
router.get("/books", bookController.getBooks);
router.get("/book/:id", bookController.getBookById);
router.post("/book", bookController.createBook);

module.exports = router;
