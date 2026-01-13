const router = require("express").Router();
const Book = require("../models/Book");
const Issue = require("../models/Issue");

router.get("/books", async (req, res) => {
  res.json(await Book.find());
});

router.post("/issue", async (req, res) => {
  const issue = new Issue({
    ...req.body,
    issueDate: new Date(),
    fine: 0
  });
  await issue.save();
  res.send("Book issued");
});

router.post("/return/:id", async (req, res) => {
  const issue = await Issue.findById(req.params.id);
  const days = (new Date() - issue.issueDate) / (1000 * 3600 * 24);
  issue.fine = days > 7 ? (days - 7) * 10 : 0;
  issue.returnDate = new Date();
  await issue.save();
  res.json(issue);
});

module.exports = router;
