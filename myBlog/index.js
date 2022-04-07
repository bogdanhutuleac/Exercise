////////////////////////////////
//creat dependencies requirements
////////////////////////////////

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid"); //uuidv4() to get a random number

////////////////////////////////
//preset useability
////////////////////////////////
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

////////////////////////////////
//DB simulation
////////////////////////////////
let posts = [
  {
    id: uuid(),
    username: "Tod",
    comment: "lol that is funny",
  },
  {
    id: uuid(),
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: uuid(),
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },
  {
    id: uuid(),
    username: "onlysaywoof",
    comment: " woof woof woof",
  },
];
////////////////////////////////
//Requests methods
////////////////////////////////

app.get("/", (req, res) => {
  res.render("main.ejs");
});

app.get("/posts", (req, res) => {
  res.render("posts/posts.ejs", { posts });
});

// new post
app.get("/posts/new", (req, res) => {
  res.render("posts/new");
});

app.post("/posts", (req, res) => {
  const { username, comment } = req.body;
  posts.push({ username, comment, id: uuid() });
  res.redirect("/posts");
});
// For Edit
app.get("/posts/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = posts.find((item) => item.id === id);
  // res.send(comment);
  res.render("posts/edit", { comment });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
