const router = require("express").Router();
const Book = require("../models/Book");

router.post("/add-book", async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.send("Book added");
});

router.get("/books", async (req, res) => {
  res.json(await Book.find());
});

router.delete("/book/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.send("Book deleted");
});

module.exports = router;
