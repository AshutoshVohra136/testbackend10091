require("dotenv").config();

const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page 😊</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port ${port}`);
});
