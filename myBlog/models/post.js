const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  username: String,
  title: String,
  post: String,
});

module.exports = mongoose.model("Post", PostSchema);
