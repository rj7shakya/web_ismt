const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  res.send("post request!");
});

app.get("/books/:id", (req, res) => {
  res.send(req.params);
});

app.use(express.json());
app.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.username === "admin" && req.body.password === "admin") {
    res.send("loggin successful!!");
  } else {
    res.send("loggin failed!!");
  }
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
