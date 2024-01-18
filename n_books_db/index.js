const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

// Set up EJS
app.set("view engine", "ejs");

const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "ismt",
  password: "inspiron",
  port: "5432",
});

client.connect((err) => {
  if (err) {
    console.error("Connection error:", err.stack);
  } else {
    console.log("Connected to PostgreSQL database!");
  }
});

// In-memory book data (replace with a database for persistence)
const books = [
  { title: "A", author: "B" },
  { title: "C", author: "D" },
  // ... more books
];

// GET route for displaying the book list
app.get("/", (req, res) => {
  client
    .query("SELECT * FROM books")
    .then((resp) => res.render("books", { books: resp.rows }))
    .catch((err) => console.log(err));
});

// GET route for displaying the form
app.get("/add-book", (req, res) => {
  res.render("add-book");
});

// POST route for handling form submissions
app.post("/add-book", (req, res) => {
  // const newBook = {
  //   title: req.body.title,
  //   author: req.body.author,
  // };
  // books.push(newBook);
  client
    .query(
      `INSERT INTO books (title, author) VALUES ($1, $2)`,
      [req.body.title, req.body.author]
      // `INSERT INTO books (title, author) VALUES (${req.body.title}, ${req.body.author})`
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  res.redirect("/"); // Redirect back to the book list
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
