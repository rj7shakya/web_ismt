const express = require("express");
const ejs = require("ejs");
const app = express();

console.log(__dirname);

app.get("/", (req, res) => {
  const user = { name: "John Doe", posts: [{ title: "My First Post" }] };
  ejs.renderFile("index.ejs", user, (err, html) => {
    console.log(err);
    res.send(html);
  });
});

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.listen(3000, () => {
  console.log("listening");
});
