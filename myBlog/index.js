////////////////////////////////
//creat dependencies requirements
////////////////////////////////

const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid"); //uuidv4() to get a random number
const mongoose = require("mongoose");
const Post = require("./models/post");

////////////////////////////////
//preset settings
////////////////////////////////
app.use(express.urlencoded({ extended: true })); // to use req.body
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
// mongoDB connection
mongoose
  .connect("mongodb://localhost:27017/myBlog")
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Something went wrong.");
    console.log(err);
  });

////////////////////////////////
//Requests methods
////////////////////////////////

app.get("/", (req, res) => {
  res.render("main.ejs");
});

app.get("/posts", async (req, res) => {
  const posts = await Post.find({});
  res.render("posts/posts.ejs", { posts });
});

// For new post
app.get("/posts/new", (req, res) => {
  res.render("posts/new");
});

app.post("/posts", async (req, res) => {
  const post = new Post(req.body.post);
  await post.save();
  res.redirect("/posts");
});

// Detailed display

// // For Edit
// app.get("/posts/:id/edit", (req, res) => {
//   const { id } = req.params;
//   const comment = posts.find((item) => item.id === id);
//   // res.send(comment);
//   res.render("posts/edit", { comment });
// });

// //For delete
// app.patch("/posts/:id", (req, res) => {
//   const { id } = req.params;
//   const commentEdit = req.body.comment;
//   const foundComment = posts.find((item) => item.id === id);
//   foundComment.comment = commentEdit;
//   res.redirect("/posts");
// });

// app.delete("/posts/:id", (req, res) => {
//   const { id } = req.params;
//   const comment = posts.find((item) => item.id === id);
//   posts = posts.filter((item) => item.id !== id);
//   res.redirect("/posts");
// });

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
