const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

// Set up EJS
app.set("view engine", "ejs");

// In-memory book data (replace with a database for persistence)
const books = [
  { title: "A", author: "B" },
  { title: "C", author: "D" },
  // ... more books
];

// GET route for displaying the book list
app.get("/", (req, res) => {
  console.log("books", books);
  res.render("books", { books: books });
});

// GET route for displaying the form
app.get("/add-book", (req, res) => {
  res.render("add-book");
});

// POST route for handling form submissions
app.post("/add-book", (req, res) => {
  console.log(req.body);
  const newBook = {
    title: req.body.title,
    author: req.body.author,
  };
  books.push(newBook);
  res.redirect("/"); // Redirect back to the book list
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
