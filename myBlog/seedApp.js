////////////////////////////////
//DB injection
////////////////////////////////

const mongoose = require("mongoose");
const Post = require("./models/post");
const seed = require("./seed");

///////////////////////////
// settings
///////////////////////////
mongoose.connect("mongodb://localhost:27017/myBlog");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

///////////////////////////
// DB populate
///////////////////////////
const seedDB = async () => {
  await Post.deleteMany({});
  for (let i = 0; i < seed.length; i++) {
    const post = new Post({
      username: `${seed[i].username}`,
      title: `${seed[i].title}`,
      post: `${seed[i].comment}`,
    });
    await post.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
