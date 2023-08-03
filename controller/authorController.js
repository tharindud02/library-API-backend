const Author = require("../models/Author");

exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getAuthorById = async (req, res) => {
  const authorId = req.params.id;

  try {
    const author = await Author.findById(authorId);
    if (!author) {
      return res.status(404).json({ error: "Author not found" });
    }
    res.json(author);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createAuthor = async (req, res) => {
  const { first_name, last_name } = req.body;

  try {
    const author = new Author({ first_name, last_name });
    await author.save();
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};
