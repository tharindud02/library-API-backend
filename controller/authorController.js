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

exports.updateAuthor = async (req, res) => {
  const authorId = req.params.id;
  const { first_name, last_name } = req.body;

  try {
    const updatedAuthor = await Author.findByIdAndUpdate(
      authorId,
      { first_name, last_name },
      { new: true }
    );

    if (!updatedAuthor) {
      return res.status(404).json({ error: "Author not found" });
    }

    res.json(updatedAuthor);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteAuthor = async (req, res) => {
  const authorId = req.params.id;

  try {
    const deletedAuthor = await Author.findByIdAndDelete(authorId);

    if (!deletedAuthor) {
      return res.status(404).json({ error: "Author not found" });
    }

    res.json({ message: "Author deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
