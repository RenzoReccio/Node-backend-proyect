const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var commentSchema = new Schema({
    restaurantId: { required: true, type: String },
    username : String,
    content : String,
  });

const Comment = mongoose.model("Comment", commentSchema);

module.exports =  Comment;