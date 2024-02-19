const express = require("express");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.json("https://fakestoreapi.com/products");
});

const port = process.env.PORT;
console.log(port);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
