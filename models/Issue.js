const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  bookId: mongoose.Schema.Types.ObjectId,
  issueDate: Date,
  returnDate: Date,
  fine: Number
});

module.exports = mongoose.model("Issue", issueSchema);
