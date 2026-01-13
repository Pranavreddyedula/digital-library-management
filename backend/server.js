require("dotenv").config();
const express = require("express");
const mongoose = require("./db");
const app = express();

app.use(express.json());
app.use(express.static("frontend"));

app.use("/auth", require("./routes/authRoutes"));
app.use("/admin", require("./routes/adminRoutes"));
app.use("/user", require("./routes/userRoutes"));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
