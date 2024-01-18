const express = require("express");
const app = express();
app.use(express.json());

let books = ["A"];

app.get("/", (req, res) => {
  res.send(books);
});

app.post("/", (req, res) => {
  books.push(req.body.name);
  res.send(books);
});

app.listen(3000, () => {
  console.log("listening!!!");
});
