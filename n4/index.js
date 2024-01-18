const express = require("express");
const app = express();
const path = require("path"); // For path handling

app.set("view engine", "ejs"); // Tell Express to use EJS
app.set("views", path.join(__dirname, "views")); // Specify views directory

app.get("/", (req, res) => {
  res.render("index", { name: "rajad" }); // Pass data to the template
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
